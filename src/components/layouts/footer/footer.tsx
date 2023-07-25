import Link from 'next/link'
import { Status } from '@/components/status'

export function SiteFooter() {
    return (
        <footer className="w-full border-t bg-background p-3">
            <div className="flex flex-row justify-between">
                <Status />
            </div>
        </footer>
    )
}
