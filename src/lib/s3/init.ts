import { S3Client } from '@aws-sdk/client-s3'

const accessKeyId = process.env.R2_ACCESS_KEY
const secretAccessKey = process.env.R2_SECRET_KEY
const accountId = process.env.R2_ACCOUNT_ID

if (!accessKeyId || !secretAccessKey) {
    throw new Error('Missing R2 access key or secret key')
}

const S3 = new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId,
        secretAccessKey,
    },
})

export { S3 }
