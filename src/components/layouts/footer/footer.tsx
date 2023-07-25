import Link from 'next/link'
import { Status } from '@/components/status'

export function SiteFooter() {
    return (
        <footer className="w-full border-t bg-background p-5 md:px-16 lg:px-36">
            <div className="flex flex-row justify-between">
                <Status />
            </div>
        </footer>
    )
}
