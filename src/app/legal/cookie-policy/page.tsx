import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { Cookie, ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                <div className="whitespace-nowrap transition-colors hover:text-foreground">
                    <Link href={`/`}>
                        <Home size={16} />
                    </Link>
                </div>
                <ChevronRight size={16} />
                <div className="whitespace-nowrap transition-colors hover:text-foreground">
                    <Link href={`/legal`}>Legal</Link>
                </div>
                <ChevronRight size={16} />
                <div className="overflow-hidden text-ellipsis whitespace-nowrap text-foreground transition-colors">
                    Cookie Policy
                </div>
            </div>
            <div className="rounded-xl border bg-secondary-dark">
                <h1 className="flex items-center justify-center gap-2 rounded-t-xl bg-background py-2 text-base">
                    <Cookie size={16} /> Cookie Policy
                </h1>
                <Separator />
                <div className="my-2 flex h-5 items-center justify-center gap-4 text-xs text-muted-foreground/60">
                    Last updated: 2023-08-30
                    <Separator orientation="vertical" />
                    Effective: 2023-08-30
                </div>
                <Separator />
                <div className="p-4 pb-0 text-muted-foreground">
                    <p className="mb-4">
                        This Cookie Policy describes how{' '}
                        <Link
                            className="text-foreground"
                            href="https://wanderer.moe/">
                            wanderer.moe
                        </Link>{' '}
                        (&quot;<b className="font-semibold text-foreground">we</b>
                        ,&quot; &quot;
                        <b className="font-semibold text-foreground">us</b>,&quot;
                        or &quot;
                        <b className="font-semibold text-foreground">our</b>
                        ,&quot;), uses cookies and similar technologies to
                        recognize you when you visit our websites at{' '}
                        <Link
                            className="text-foreground"
                            href="https://wanderer.moe/">
                            https://wanderer.moe/
                        </Link>{' '}
                        (&quot;
                        <b className="font-semibold text-foreground">Website</b>
                        &quot;). It explains what these technologies are and why
                        we use them, as well as your rights to control our use
                        of them.
                    </p>
                    <p className="mb-4">
                        In some cases we may use cookies to collect personal
                        information, or that becomes personal information if we
                        combine it with other information.
                    </p>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            What are cookies?
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                Cookies are small data files that are placed on
                                your computer or mobile device when you visit a
                                website. Cookies are widely used by website
                                owners in order to make their websites work, or
                                to work more efficiently, as well as to provide
                                reporting information.
                            </p>
                            <p>
                                Cookies set by the website owner (in this case,{' '}
                                <b className="font-semibold text-foreground">
                                    wanderer.moe
                                </b>
                                ) are called &quot;
                                <b className="font-semibold text-foreground">
                                    first-party cookies
                                </b>
                                .&quot; Cookies set by parties other than the
                                website owner are called &quot;
                                <b className="font-semibold text-foreground">
                                    third-party cookies
                                </b>
                                .&quot; Third-party cookies enable third-party
                                features or functionality to be provided on or
                                through the website (e.g., advertising,
                                interactive content, and analytics). The parties
                                that set these third-party cookies can recognize
                                your computer both when it visits the website in
                                question and also when it visits certain other
                                websites.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            Why do we use cookies?
                        </h1>
                        <div className="p-4">
                            <p>
                                We use first- and third-party cookies for
                                several reasons. Some cookies are required for
                                technical reasons in order for our Website to
                                operate, and we refer to these as &quot;
                                <b className="font-semibold text-foreground">
                                    essential
                                </b>
                                &quot; or &quot;
                                <b className="font-semibold text-foreground">
                                    strictly necessary
                                </b>
                                &quot; cookies. Other cookies also enable us to
                                track and target the interests of our users to
                                enhance the experience on our Online Properties.
                                Third parties serve cookies through our Website
                                for advertising, analytics, and other purposes.
                                This is described in more detail below.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            How can I control cookies?
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                You have the right to decide whether to accept
                                or reject cookies. You can exercise your cookie
                                rights by setting your preferences in the Cookie
                                Consent Manager. The Cookie Consent Manager
                                allows you to select which categories of cookies
                                you accept or reject. Essential cookies cannot
                                be rejected as they are strictly necessary to
                                provide you with services.
                            </p>
                            <p className="mb-4">
                                The Cookie Consent Manager can be found in the
                                notification banner and on our website. If you
                                choose to reject cookies, you may still use our
                                website though your access to some functionality
                                and areas of our website may be restricted. You
                                may also set or amend your web browser controls
                                to accept or refuse cookies.
                            </p>
                            <p>
                                The specific types of first- and third-party
                                cookies served through our Website and the
                                purposes they perform are described in the table
                                below (please note that the specific cookies
                                served may vary depending on the specific Online
                                Properties you visit).
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-secondary-dark">
                        <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-secondary-dark py-2 text-base text-white">
                            Cookies List
                        </h1>
                        <div className="px-4">
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-center text-foreground">
                                        Essential website cookies
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-4">
                                            These cookies are strictly necessary
                                            to provide you with services
                                            available through our Website and to
                                            use some of its features, such as
                                            access to secure areas.
                                        </p>
                                        <div className="mb-4 rounded-xl border bg-secondary-dark p-2 text-xs">
                                            <table>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Name:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        __cf_bm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Purpose:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        Cloudflare places the
                                                        cookie on end-user
                                                        devices that access
                                                        customer sites protected
                                                        by Bot Management or Bot
                                                        Fight Mode.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Provider:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        .discordapp.com
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Service:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        Cloudflare
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Type:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        http_cookie
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Expires in:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        29 minutes
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-center text-foreground">
                                        Performance and functionality cookies
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-4">
                                            These cookies are used to enhance
                                            the performance and functionality of
                                            our Website but are non-essential to
                                            their use. However, without these
                                            cookies, certain functionality (like
                                            videos) may become unavailable.
                                        </p>
                                        <div className="mb-4 rounded-xl border bg-secondary-dark p-2 text-xs">
                                            <table>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Name:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        __cfruid
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Purpose:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        Used by the content
                                                        network, Cloudflare, to
                                                        identify trusted web
                                                        traffic.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Provider:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        .discord.com
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Service:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        Cloudflare
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Type:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        server_cookie
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Expires in:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        session
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-center text-foreground">
                                        Analytics and customization cookies
                                    </AccordionTrigger>
                                    {/* generate the entire content in one go */}
                                    <AccordionContent>
                                        <p className="mb-4">
                                            These cookies collect information
                                            that is used either in aggregate
                                            form to help us understand how our
                                            Website is being used or how
                                            effective our marketing campaigns
                                            are, or to help us customize our
                                            Website for you.
                                        </p>
                                        <div className="mb-4 rounded-xl border bg-secondary-dark p-2 text-xs">
                                            <table>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Name:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">NID</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Purpose:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        Set by Google to set a
                                                        unique user ID to
                                                        remember user
                                                        preferences. Persistent
                                                        cookie that stays for
                                                        182 days
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Provider:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        .google.com
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Service:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        Google
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Country:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        United States
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Type:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        http_cookie
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Expires in:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        6 months
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-center text-foreground">
                                        Advertising cookies
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-4">
                                            These cookies are used to make
                                            advertising messages more relevant
                                            to you. They perform functions like
                                            preventing the same ad from
                                            continuously reappearing, ensuring
                                            that ads are properly displayed for
                                            advertisers, and in some cases
                                            selecting advertisements that are
                                            based on your interests.
                                        </p>
                                        <div className="mb-4 rounded-xl border bg-secondary-dark p-2 text-xs">
                                            <table>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Name:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">td</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Purpose:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        Used to deliver targeted
                                                        adverts to users based
                                                        on browsing activity. It
                                                        is a HTTP cookie.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Provider:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        www.googletagmanager.com
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Service:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        UnrulyX
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Country:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        United States
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Type:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        pixel_tracker
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1">
                                                        <b className="font-semibold text-foreground">
                                                            Expires in:
                                                        </b>
                                                    </td>
                                                    <td className="p-1">
                                                        session
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    value="item-5"
                                    className="border-none">
                                    <AccordionTrigger className="text-center text-foreground">
                                        Unclassified cookies
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p>
                                            Unfortunately, we do not have a
                                            comprehensive list of descriptions
                                            for each individual cookie, and
                                            unclassified ones are placed in this
                                            section. We are working with each
                                            respective provider to identify
                                            these cookies and will update this
                                            Cookie Policy as soon as the
                                            information is available.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            How can I control cookies on my browser?
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                As the means by which you can refuse cookies
                                through your web browser controls vary from
                                browser to browser, you should visit your
                                browser&apos;s help menu for more information.
                                The following is information about how to manage
                                cookies on the most popular browsers:
                            </p>
                            <ul className="mb-4 list-inside list-disc">
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies">
                                        Chrome
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
                                        Internet Explorer
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US">
                                        Firefox
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac">
                                        Safari
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">
                                        Edge
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="https://help.opera.com/en/latest/web-preferences/">
                                        Opera
                                    </Link>
                                </li>
                            </ul>
                            <p className="mb-4">
                                In addition, most advertising networks offer you
                                a way to opt out of targeted advertising. If you
                                would like to find out more information, please
                                visit:
                            </p>
                            <ul className="list-inside list-disc">
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="http://www.aboutads.info/choices/">
                                        Digital Advertising Alliance
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="http://youradchoices.ca/">
                                        Digital Advertising Alliance of Canada
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="http://www.youronlinechoices.com/">
                                        European Interactive Digital Advertising
                                        Alliance
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            What about other tracking technologies, like web
                            beacons?
                        </h1>
                        <div className="p-4">
                            <p>
                                Cookies are not the only way to recognize or
                                track visitors to a website. We may use other,
                                similar technologies from time to time, like web
                                beacons (sometimes called &quot;tracking
                                pixels&quot; or &quot;clear gifs&quot;). These
                                are tiny graphics files that contain a unique
                                identifier that enables us to recognize when
                                someone has visited our Website or opened an
                                email including them. This allows us, for
                                example, to monitor the traffic patterns of
                                users from one page within a website to another,
                                to deliver or communicate with cookies, to
                                understand whether you have come to the website
                                from an online advertisement displayed on a
                                third-party website, to improve site
                                performance, and to measure the success of email
                                marketing campaigns. In many instances, these
                                technologies are reliant on cookies to function
                                properly, and so declining cookies will impair
                                their functioning.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            How often will you update this Cookie Policy?
                        </h1>
                        <div className="p-4">
                            <p>
                                We may update this Cookie Policy from time to
                                time in order to reflect, for example, changes
                                to the cookies we use or for other operational,
                                legal, or regulatory reasons. Please therefore
                                revisit this Cookie Policy regularly to stay
                                informed about our use of cookies and related
                                technologies.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            Where can I get further information?
                        </h1>
                        <div className="p-4">
                            <p>
                                If you have any questions about our use of
                                cookies or other technologies, please email us
                                at{' '}
                                <Link
                                    className="text-foreground"
                                    href="mailto:privacy@wanderer.moe">
                                    privacy@wanderer.moe
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// COOKIE POLICY

// Last updated August 03, 2023

// This Cookie Policy explains how __________ ("Company," "we," "us," and "our") uses cookies and similar technologies to recognize you when you visit our website at  https://wanderer.moe ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.

// In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.

// What are cookies?

// Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.

// Cookies set by the website owner (in this case, __________) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.

// Why do we use cookies?

// We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.

// How can I control cookies?

// You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.

// The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.

// The specific types of first- and third-party cookies served through our Website and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):

// Essential website cookies:

// These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.

// Name:__cf_bm
// Purpose:Cloudflare places the cookie on end-user devices that access customer sites protected by Bot Management or Bot Fight Mode.
// Provider:.discordapp.com
// Service:Cloudflare View Service Privacy Policy
// Country:__________
// Type:http_cookie
// Expires in:29 minutes

// Performance and functionality cookies:
// These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.

// Name:__cfruid
// Purpose:Used by the content network, Cloudflare, to identify trusted web traffic.
// Provider:.discord.com
// Service:Cloudflare View Service Privacy Policy
// Country:__________
// Type:server_cookie
// Expires in:session

// Analytics and customization cookies:
// These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.

// Name:NID
// Purpose:Set by Google to set a unique user ID to remember user preferences. Persistent cookie that stays for 182 days
// Provider:.google.com
// Service:Google View Service Privacy Policy
// Country:United States
// Type:http_cookie
// Expires in:6 months

// Advertising cookies:
// These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.

// Name:td
// Purpose:Used to deliver targeted adverts to users based on browsing activity. It is a HTTP cookie.
// Provider:www.googletagmanager.com
// Service:UnrulyX View Service Privacy Policy
// Country:United States
// Type:pixel_tracker
// Expires in:session

// Unclassified cookies:
// Unfortunately, we do not have a comprehensive list of descriptions for each individual cookie, and "unclassified" ones are placed in this section. We are working with each respective provider to identify these cookies and will update this Cookie Policy as soon as the information is available.

// How can I control cookies on my browser?

// As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information. The following is information about how to manage cookies on the most popular browsers:
// Chrome
// Internet Explorer
// Firefox
// Safari
// Edge
// Opera
// In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:
// Digital Advertising Alliance
// Digital Advertising Alliance of Canada
// European Interactive Digital Advertising Alliance

// What about other tracking technologies, like web beacons?

// Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Website or opened an email including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.

// Do you use Flash cookies or Local Shared Objects?

// Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or "LSOs") to, among other things, collect and store information about your use of our services, fraud prevention, and for other site operations.

// If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the Website Storage Settings Panel. You can also control Flash Cookies by going to the Global Storage Settings Panel and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to "information" on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).

// Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.

// Do you serve targeted advertising?

// Third parties may serve cookies on your computer or mobile device to serve advertising through our Website. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. They can accomplish this by using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details, or other details that directly identify you unless you choose to provide these.

// How often will you update this Cookie Policy?

// We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.

// The date at the top of this Cookie Policy indicates when it was last updated.

// Where can I get further information?

// If you have any questions about our use of cookies or other technologies, please email us at privacy@wanderer.moe.
