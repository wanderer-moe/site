'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { useBrowserDetection } from '@/hooks/use-browser-detection'
import { setCookie, getCookie } from 'cookies-next'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'

export const reccomendedBrowsers: { [key: string]: string[] } = {
    android: ['chrome', 'google'],
    ios: ['safari', 'chrome'],
}

const osMap: { [key: string]: string } = {
    android: 'android',
    ios: 'iOS',
}

export function DeviceWarning() {
    const [isOpen, setIsOpen] = React.useState(true)

    const dontShowAgain = () => {
        setCookie('hasSeenWarning', 'true')
        setIsOpen(false)
    }

    const hasSeenWarning = getCookie('hasSeenWarning') === 'true' ? true : false
    const { browser, os } = useBrowserDetection()

    if (
        hasSeenWarning ||
        !browser ||
        !os ||
        (os !== 'android' && os !== 'ios')
    ) {
        return null
    }

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Device Warning</AlertDialogTitle>
                    <AlertDialogDescription>
                        You&apos;re on {osMap[os]}. It&apos;s reccomended to use{' '}
                        {reccomendedBrowsers[os].length === 1
                            ? reccomendedBrowsers[os][0]
                            : reccomendedBrowsers[os].join(' or ')}{' '}
                        to avoid any issues when downloading files.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="gap-2">
                    <Button
                        variant={'outline'}
                        onClick={() => {
                            dontShowAgain()
                        }}>
                        Dont Show Again
                    </Button>
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
