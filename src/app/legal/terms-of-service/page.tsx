import { Separator } from '@/components/ui/separator'
import {
    AlertCircle,
    AlertTriangle,
    Ban,
    CalendarDays,
    ClipboardEdit,
    Database,
    FileBadge2,
    FileEdit,
    FileKey2,
    FileText,
    Gavel,
    Info,
    LifeBuoy,
    Link as LinkIcon,
    Mail,
    MapPin,
    MoreHorizontal,
    PhoneCall,
    RefreshCw,
    ScrollText,
    Settings,
    Share2,
    ShieldAlert,
    SlidersHorizontal,
    Umbrella,
    UserCheck,
    UserPlus,
    Home,
    ChevronRight,
} from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
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
                    <ScrollText size={16} /> Terms of Service
                </h1>
                <Separator />
                <div className="my-2 flex h-5 items-center justify-center gap-4 text-xs text-muted-foreground/60">
                    Last updated: 2023-08-04
                    <Separator orientation="vertical" />
                    Effective: 2023-08-04
                </div>
                <Separator />
                <div className="p-4 pb-0 text-muted-foreground">
                    <p className="mb-4">
                        We are{' '}
                        <Link className="text-foreground" href="/">
                            wanderer.moe
                        </Link>{' '}
                        (&quot;
                        <b className="font-semibold text-foreground">we</b>
                        &quot;, &quot;
                        <b className="font-semibold text-foreground">us</b>
                        &quot;, or &quot;
                        <b className="font-semibold text-foreground">our</b>
                        &quot;). We operate the website{' '}
                        <Link className="text-foreground" href="/">
                            wanderer.moe
                        </Link>{' '}
                        (the &quot;
                        <b className="font-semibold text-foreground">Site</b>
                        &quot;), as well as any other related products and
                        services that refer or link to these legal terms (the
                        &quot;
                        <b className="font-semibold text-foreground">
                            Legal Terms
                        </b>
                        &quot;) (collectively, the &quot;
                        <b className="font-semibold text-foreground">
                            Services
                        </b>
                        &quot;). You can contact us by email at{' '}
                        <Link
                            className="text-foreground"
                            href="mailto:support@wanderer.moe">
                            support@wanderer.moe
                        </Link>
                        .
                    </p>
                    <p className="mb-4">
                        These Legal Terms constitute a legally binding agreement
                        made between you, whether personally or on behalf of an
                        entity (&quot;
                        <b className="font-semibold text-foreground">you</b>
                        &quot;), and wanderer.moe, concerning your access to and
                        use of the Services. You agree that by accessing the
                        Services, you have read, understood, and agreed to be
                        bound by all of these Legal Terms.{' '}
                        <span className="font-bold text-white">
                            If you do not agree with all of these legal terms,
                            then you are expressly prohibited from using the
                            services and you must discontinue use immediately.
                        </span>
                    </p>
                    <p className="mb-4">
                        Supplemental terms and conditions or documents that may
                        be posted on the Services from time to time are hereby
                        expressly incorporated herein by reference. We reserve
                        the right, in our sole discretion, to make changes or
                        modifications to these Legal Terms from time to time. We
                        will alert you about any changes by updating the
                        &quot;Last updated&quot; date of these Legal Terms, and
                        you waive any right to receive specific notice of each
                        such change. It is your responsibility to periodically
                        review these Legal Terms to stay informed of updates.
                        You will be subject to, and will be deemed to have been
                        made aware of and to have accepted, the changes in any
                        revised Legal Terms by your continued use of the
                        Services after the date such revised Legal Terms are
                        posted.
                    </p>
                    <p className="mb-4">
                        The Services are intended for users who are at least 13
                        years of age. All users who are minors in the
                        jurisdiction in which they reside (generally under the
                        age of 18) must have the permission of, and be directly
                        supervised by, their parent or guardian to use the
                        Services. If you are a minor, you must have your parent
                        or guardian read and agree to these Legal Terms prior to
                        you using the Services.
                    </p>
                    <div className="mb-4 rounded-xl border bg-secondary-dark">
                        <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-secondary-dark py-2 text-base text-white">
                            <Info size={16} /> Table of Contents
                        </h1>
                        <div className="p-4">
                            <ol className="list-outside list-decimal pl-7">
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#our-services">
                                        Our Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#intellectual-property-rights">
                                        Intellectual Property Rights
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#user-representations">
                                        User Representations
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#user-registration">
                                        User Registration
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#prohibited-activities">
                                        Prohibited Activities
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#user-generated-contributions">
                                        User Generated Contributions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#contribution-licence">
                                        Contribution Licence
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#social-media">
                                        Social Media
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#third-party-websites-and-content">
                                        Third-Party Websites and Content
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#services-management">
                                        Services Management
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#copyright">
                                        Copyright Infringements
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#term-and-termination">
                                        Term and Termination
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#modifications-and-interruptions">
                                        Modifications and Interruptions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#governing-law">
                                        Governing Law
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#dispute-resolution">
                                        Dispute Resolution
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#corrections">
                                        Corrections
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#disclaimer">
                                        Disclaimer
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#limitation-of-liability">
                                        Limitation of Liability
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#indemnification">
                                        Indemnification
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#user-data">
                                        User Data
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#electronic-communications">
                                        Electronic Communications
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#california-users-and-residents">
                                        California Users and Residents
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#miscellaneous">
                                        Miscellaneous
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        href="#contact-us">
                                        Contact Us
                                    </Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="our-services"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <Settings size={16} /> 1. Our Services
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                The information provided when using the Services
                                is not intended for distribution to or use by
                                any person or entity in any jurisdiction or
                                country where such distribution or use would be
                                contrary to law or regulation or which would
                                subject us to any registration requirement
                                within such jurisdiction or country.
                                Accordingly, those persons who choose to access
                                the Services from other locations do so on their
                                own initiative and are solely responsible for
                                compliance with local laws, if and to the extent
                                local laws are applicable.
                            </p>
                            <p>
                                The Services are not tailored to comply with
                                industry-specific regulations (Health Insurance
                                Portability and Accountability Act (HIPAA),
                                Federal Information Security Management Act
                                (FISMA), etc.), so if your interactions would be
                                subjected to such laws, you may not use the
                                Services. You may not use the Services in a way
                                that would violate the Gramm-Leach-Bliley Act
                                (GLBA).
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="intellectual-property-rights"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <FileText size={16} /> 2. Intellectual Property
                            Rights
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                Unless otherwise indicated, our Services are our
                                proprietary property and all source code,
                                databases, functionality, software, website
                                designs on the Services (collectively, the
                                &quot;
                                <b className="font-semibold text-foreground">
                                    Content
                                </b>
                                &quot;) and the trademarks, service marks, and
                                logos contained therein (the &quot;
                                <b className="font-semibold text-foreground">
                                    Marks
                                </b>
                                &quot;) are owned or controlled by us or
                                licensed to us, and are protected by copyright
                                and trademark laws and various other
                                intellectual property rights and unfair
                                competition laws of the United States,
                                international copyright laws, and international
                                conventions. The Content and the Marks are
                                provided on the Site “AS IS” for your personal,
                                non-commercial, or educational use.
                            </p>
                            <p className="mb-4">
                                We respect the intellectual property rights of
                                others. The purpose of the Services is to
                                facilitate ease of access for downloadable
                                resources, including but not limited to images,
                                videos, audio, documents, and logos
                                (collectively, the &quot;
                                <b className="font-semibold text-foreground">
                                    Assets
                                </b>
                                &quot;). These Assets may be the intellectual
                                property of unaffiliated third parties, and we
                                do not claim any ownership rights to any such
                                Assets made available on the Services. The
                                original owner of such Assets retains all
                                rights.
                            </p>
                            <p className="mb-4">
                                By using the Services, you agree and understand
                                that the rights to these Assets have not been
                                transferred from the original owner to you. The
                                original owner of the Assets retains all rights
                                to exercise control over their intellectual
                                property, including but not limited to
                                derivative works produced and/or released based
                                on these Assets. Usage of these Assets is
                                subject to the conditions of the original owner.
                                By using our Services, you represent and warrant
                                that you have all necessary rights and
                                permissions to use any Assets made available on
                                our Services. You agree to indemnify and hold us
                                harmless from any claims or damages arising from
                                your use of any Assets in violation of these
                                Legal Terms or applicable law.
                            </p>
                            <p className="mb-4">
                                If you are the original owner of any Assets made
                                available on the Services and would like to
                                request the removal of said Assets, please
                                contact us using the contact information at the
                                bottom of these Legal Terms. We will promptly
                                investigate and take appropriate action in
                                response to any claims of infringement.
                            </p>
                            <p className="mb-4">
                                Provided that you are eligible to use the
                                Services, you are granted a limited license to
                                access and use the Services and to download or
                                print a copy of any portion of the Content to
                                which you have properly gained access solely for
                                your personal, non-commercial use. We reserve
                                all rights not expressly granted to you in and
                                to the Site, the Content and the Marks.
                            </p>
                            <p>
                                The codebase of the Site is
                                &quot;open-source&quot; on GitHub, meaning it is
                                available for any individual to view, modify,
                                and redistribute. As the codebase is licensed
                                under the{' '}
                                <Link
                                    className="text-foreground"
                                    href="https://www.gnu.org/licenses/gpl-3.0.en.html">
                                    GNU General Public License v3.0
                                </Link>{' '}
                                (GPL-3.0), you are free to use the codebase for
                                any purpose, commercial or non-commercial, as
                                long as you follow the terms of the license.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="user-representations"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <UserCheck size={16} /> 3. User Representations
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                By using the Services, you represent and warrant
                                that:
                            </p>
                            <ul className="mb-4 list-outside list-disc pl-8">
                                <li>
                                    all registration information you submit will
                                    be true, accurate, current, and complete;
                                </li>
                                <li>
                                    you will maintain the accuracy of such
                                    information and promptly update such
                                    registration information as necessary;
                                </li>
                                <li>
                                    you have the legal capacity and you agree to
                                    comply with these Legal Terms;
                                </li>
                                <li>you are not under the age of 13;</li>
                                <li>
                                    you are not a minor in the jurisdiction in
                                    which you reside, or if a minor, you have
                                    received parental permission to use the
                                    Services;
                                </li>
                                <li>
                                    you will not access the Services through
                                    automated or non-human means, whether
                                    through a bot, script or otherwise;
                                </li>
                                <li>
                                    you will not use the Services for any
                                    illegal or unauthorised purpose;
                                </li>
                                <li>
                                    your use of the Services will not violate
                                    any applicable law or regulation.
                                </li>
                            </ul>
                            <p>
                                If you provide any information that is untrue,
                                inaccurate, not current, or incomplete, we have
                                the right to suspend or terminate your account
                                and refuse any and all current or future use of
                                the Services (or any portion thereof).
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="user-registration"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <UserPlus size={16} /> 4. User Registration
                        </h1>
                        <div className="p-4">
                            <p>
                                You may be required to register to use the
                                Services. You agree to keep your password
                                confidential and will be responsible for all use
                                of your account and password. We reserve the
                                right to remove, reclaim, or change a username
                                you select if we determine, in our sole
                                discretion, that such username is inappropriate,
                                obscene, or otherwise objectionable.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="prohibited-activities"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <Ban size={16} /> 5. Prohibited Activities
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                You may not access or use the Services for any
                                purpose other than that for which we make the
                                Services available. The Services may not be used
                                in connection with any commercial endeavours
                                except those that are specifically endorsed or
                                approved by us.
                            </p>
                            <p className="mb-4">
                                As a user of the Services, you agree not to:
                            </p>
                            <ul className="list-outside list-disc pl-8">
                                <li>
                                    Systematically retrieve data or other
                                    content from the Services to create or
                                    compile, directly or indirectly, a
                                    collection, compilation, database, or
                                    directory without written permission from
                                    us.
                                </li>
                                <li>
                                    Trick, defraud, or mislead us and other
                                    users, especially in any attempt to learn
                                    sensitive account information such as user
                                    passwords.
                                </li>
                                <li>
                                    Circumvent, disable, or otherwise interfere
                                    with security-related features of the
                                    Services, including features that prevent or
                                    restrict the use or copying of any Content
                                    or enforce limitations on the use of the
                                    Services and/or the Content contained
                                    therein.
                                </li>
                                <li>
                                    Disparage, tarnish, or otherwise harm, in
                                    our opinion, us and/or the Services.
                                </li>
                                <li>
                                    Use any information obtained from the
                                    Services in order to harass, abuse, or harm
                                    another person.
                                </li>
                                <li>
                                    Make improper use of our support services or
                                    submit false reports of abuse or misconduct.
                                </li>
                                <li>
                                    Use the Services in a manner inconsistent
                                    with any applicable laws or regulations.
                                </li>
                                <li>
                                    Engage in unauthorised framing of or linking
                                    to the Services.
                                </li>
                                <li>
                                    Upload or transmit (or attempt to upload or
                                    to transmit) viruses, Trojan horses, or
                                    other material, including excessive use of
                                    capital letters and spamming (continuous
                                    posting of repetitive text), that interferes
                                    with any party’s uninterrupted use and
                                    enjoyment of the Services or modifies,
                                    impairs, disrupts, alters, or interferes
                                    with the use, features, functions,
                                    operation, or maintenance of the Services.
                                </li>
                                <li>
                                    Engage in any automated use of the system,
                                    such as using scripts to send comments or
                                    messages, or using any data mining, robots,
                                    or similar data gathering and extraction
                                    tools.
                                </li>
                                <li>
                                    Delete the copyright or other proprietary
                                    rights notice from any Content.
                                </li>
                                <li>
                                    Attempt to impersonate another user or
                                    person or use the username of another user.
                                </li>
                                <li>
                                    Upload or transmit (or attempt to upload or
                                    to transmit) any material that acts as a
                                    passive or active information collection or
                                    transmission mechanism, including without
                                    limitation, clear graphics interchange
                                    formats (&quot;gifs&quot;), 1×1 pixels, web
                                    bugs, cookies, or other similar devices
                                    (sometimes referred to as
                                    &quot;spyware&quot; or &quot;passive
                                    collection mechanisms&quot; or
                                    &quot;pcms&quot;).
                                </li>
                                <li>
                                    Interfere with, disrupt, or create an undue
                                    burden on the Services or the networks or
                                    services connected to the Services.
                                </li>
                                <li>
                                    Harass, annoy, intimidate, or threaten any
                                    of our employees or agents engaged in
                                    providing any portion of the Services to
                                    you.
                                </li>
                                <li>
                                    Attempt to bypass any measures of the
                                    Services designed to prevent or restrict
                                    access to the Services, or any portion of
                                    the Services.
                                </li>
                                <li>
                                    Except as may be the result of standard
                                    search engine or Internet browser usage,
                                    use, launch, develop, or distribute any
                                    automated system, including without
                                    limitation, any spider, robot, cheat
                                    utility, scraper, or offline reader that
                                    accesses the Services, or use or launch any
                                    unauthorised script or other software.
                                </li>
                                <li>
                                    Make any unauthorised use of the Services,
                                    including collecting usernames and/or email
                                    addresses of users by electronic or other
                                    means for the purpose of sending unsolicited
                                    email, or creating user accounts by
                                    automated means or under false pretences.
                                </li>
                                <li>
                                    Use the Services as part of any effort to
                                    compete with us or otherwise use the
                                    Services and/or the Content for any
                                    revenue-generating endeavour or commercial
                                    enterprise.
                                </li>
                                <li>
                                    Sell or otherwise transfer your profile.
                                </li>
                                <li>
                                    Use the Services to advertise or offer to
                                    sell goods and services.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="user-generated-contributions"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <FileEdit size={16} /> 6. User Generated
                            Contributions
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                The Services may provide you with the
                                opportunity to create, submit, post, display,
                                transmit, perform, publish, distribute, or
                                broadcast content and materials to us or on the
                                Services, including but not limited to text,
                                writings, video, audio, graphics, or personal
                                information or other material (collectively,
                                &quot;
                                <b className="font-semibold text-foreground">
                                    Contributions
                                </b>
                                &quot;). Contributions may be viewable by other
                                users of the Services and through third-party
                                websites. As such, any Contributions you
                                transmit may be treated as non-confidential and
                                non-proprietary. When you create or make
                                available any Contributions, you thereby
                                represent and warrant that:
                            </p>
                            <ul className="mb-4 list-outside list-disc pl-8">
                                <li>
                                    The creation, distribution, transmission,
                                    public display, or performance, and the
                                    accessing, downloading, or copying of your
                                    Contributions do not and will not infringe
                                    the proprietary rights, including but not
                                    limited to the intellectual property rights,
                                    of any third party;
                                </li>
                                <li>
                                    You are the creator and owner of or have the
                                    necessary licenses, rights, consents,
                                    releases, attributions, and/or permissions
                                    to use and to authorise us, the Services,
                                    and other users of the Services to use your
                                    Contributions in any manner contemplated by
                                    the Services and these Legal Terms;
                                </li>
                                <li>
                                    You have the written consent, release,
                                    and/or permission of each and every
                                    identifiable individual person in your
                                    Contributions to use the name or likeness of
                                    each and every such identifiable individual
                                    person to enable inclusion and use of your
                                    Contributions in any manner contemplated by
                                    the Services and these Legal Terms;
                                </li>
                                <li>
                                    Your Contributions are not false,
                                    inaccurate, or misleading;
                                </li>
                                <li>
                                    Your Contributions are not unsolicited or
                                    unauthorised advertising, promotional
                                    materials, pyramid schemes, chain letters,
                                    spam, mass mailings, or other forms of
                                    solicitation;
                                </li>
                                <li>
                                    Your Contributions are not obscene, lewd,
                                    lascivious, filthy, violent, harassing,
                                    libellous, slanderous, or otherwise
                                    objectionable (as determined by us);
                                </li>
                                <li>
                                    Your Contributions do not ridicule, mock,
                                    disparage, intimidate, or abuse anyone;
                                </li>
                                <li>
                                    Your Contributions do not advocate the
                                    violent overthrow of any government or
                                    incite, encourage, or threaten physical harm
                                    against another;
                                </li>
                                <li>
                                    Your Contributions do not violate any
                                    applicable law, regulation, or rule;
                                </li>
                                <li>
                                    Your Contributions do not violate the
                                    privacy or publicity rights of any third
                                    party;
                                </li>
                                <li>
                                    Your Contributions do not violate any
                                    applicable law concerning child pornography,
                                    or otherwise intended to protect the health
                                    or well-being of minors.
                                </li>
                                <li>
                                    Your Contributions do not include any
                                    offensive comments that are connected to
                                    race, national origin, gender, sexual
                                    preference, or physical handicap.
                                </li>
                                <li>
                                    Your Contributions do not otherwise violate,
                                    or link to material that violates, any
                                    provision of these Legal Terms, or any
                                    applicable law or regulation.
                                </li>
                            </ul>
                            <p>
                                Any use of the Services in violation of the
                                foregoing violates these Legal Terms and may
                                result in, among other things, termination or
                                suspension of your rights to use the Services.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="contribution-licence"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <FileBadge2 size={16} /> 7. Contribution Licence
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                By posting your Contributions to any part of the
                                Services or making Contributions accessible to
                                the Services by linking your account from the
                                Services to any of your social networking
                                accounts, you automatically grant, and you
                                represent and warrant that you have the right to
                                grant, to us an unrestricted, unlimited,
                                irrevocable, perpetual, non-exclusive,
                                transferable, royalty-free, fully-paid,
                                worldwide right, and licence to host, use, copy,
                                reproduce, disclose, sell, resell, publish,
                                broadcast, retitle, archive, store, cache,
                                publicly perform, publicly display, reformat,
                                translate, transmit, excerpt (in whole or in
                                part), and distribute such Contributions
                                (including, without limitation, your image and
                                voice) for any purpose, commercial, advertising,
                                or otherwise, and to prepare derivative works
                                of, or incorporate into other works, such
                                Contributions, and grant and authorise
                                sublicences of the foregoing. The use and
                                distribution may occur in any media formats and
                                through any media channels.
                            </p>
                            <p className="mb-4">
                                This licence will apply to any form, media, or
                                technology now known or hereafter developed, and
                                includes our use of your name, company name, and
                                franchise name, as applicable, and any of the
                                trademarks, service marks, trade names, logos,
                                and personal and commercial images you provide.
                                You waive all moral rights in your
                                Contributions, and you warrant that moral rights
                                have not otherwise been asserted in your
                                Contributions.
                            </p>
                            <p className="mb-4">
                                We do not assert any ownership over your
                                Contributions. You retain full ownership of all
                                of your Contributions and any intellectual
                                property rights or other proprietary rights
                                associated with your Contributions. We are not
                                liable for any statements or representations in
                                your Contributions provided by you in any area
                                on the Services. You are solely responsible for
                                your Contributions to the Services and you
                                expressly agree to exonerate us from any and all
                                responsibility and to refrain from any legal
                                action against us regarding your Contributions.
                            </p>
                            <p className="mb-4">
                                We have the right, in our sole and absolute
                                discretion, (1) to edit, redact, or otherwise
                                change any Contributions; (2) to re-categorise
                                any Contributions to place them in more
                                appropriate locations on the Services; and (3)
                                to pre-screen or delete any Contributions at any
                                time and for any reason, without notice. We have
                                no obligation to monitor your Contributions.
                            </p>
                            <p>
                                You acknowledge and agree that your
                                Contributions are voluntary, gratuitous, and
                                made without expectation of any compensation. We
                                will not be liable to you for any use or
                                disclosure of your Contributions.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="social-media"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <Share2 size={16} /> 8. Social Media
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                As part of the functionality of the Services,
                                you may link your account with online accounts
                                you have with third-party service providers
                                (each such account, a &quot;
                                <b className="font-semibold text-foreground">
                                    Third-Party Account
                                </b>
                                &quot;) by either:
                            </p>
                            <ul className="mb-4 list-outside list-disc pl-8">
                                <li>
                                    providing your Third-Party Account login
                                    information through the Services; or
                                </li>
                                <li>
                                    allowing us to access your Third-Party
                                    Account, as permitted under the applicable
                                    terms and conditions that govern your use of
                                    each Third-Party Account.
                                </li>
                            </ul>
                            <p className="mb-4">
                                You represent and warrant that you are entitled
                                to disclose your Third-Party Account login
                                information to us and/or grant us access to your
                                Third-Party Account, without breach by you of
                                any of the terms and conditions that govern your
                                use of the applicable Third-Party Account, and
                                without obligating us to pay any fees or making
                                us subject to any usage limitations imposed by
                                the third-party service provider of the
                                Third-Party Account.
                            </p>
                            <p className="mb-4">
                                By granting us access to any Third-Party
                                Accounts, you understand that:
                            </p>
                            <ul className="mb-4 list-outside list-disc pl-8">
                                <li>
                                    We may access, make available, and store (if
                                    applicable) any content that you have
                                    provided to and stored in your Third-Party
                                    Account (the &quot;
                                    <b className="font-semibold text-foreground">
                                        Social Network Content
                                    </b>
                                    &quot;) so that it is available on and
                                    through the Services via your account,
                                    including without limitation any friend
                                    lists.
                                </li>
                                <li>
                                    We may submit to and receive from your
                                    Third-Party Account additional information
                                    to the extent you are notified when you link
                                    your account with the Third-Party Account.
                                </li>
                            </ul>
                            <p className="mb-4">
                                Depending on the Third-Party Accounts you choose
                                and subject to the privacy settings that you
                                have set in such Third-Party Accounts,
                                personally identifiable information that you
                                post to your Third-Party Accounts may be
                                available on and through your account on the
                                Services. Please note that if a Third-Party
                                Account or associated service becomes
                                unavailable or our access to such Third-Party
                                Account is terminated by the third-party service
                                provider, then Social Network Content may no
                                longer be available on and through the Services.
                                You will have the ability to disable the
                                connection between your account on the Services
                                and your Third-Party Accounts at any time.{' '}
                                <span className="font-bold text-white">
                                    Please note that your relationship with the
                                    third-party service providers associated
                                    with your third-party accounts is governed
                                    solely by your agreement(s) with such
                                    third-party service providers.
                                </span>
                            </p>
                            <p>
                                We make no effort to review any Social Network
                                Content for any purpose, including but not
                                limited to, for accuracy, legality, or
                                non-infringement, and we are not responsible for
                                any Social Network Content. You acknowledge and
                                agree that we may access your email address book
                                associated with a Third-Party Account and your
                                contacts list stored on your mobile device or
                                tablet computer solely for purposes of
                                identifying and informing you of those contacts
                                who have also registered to use the Services.
                                You can deactivate the connection between the
                                Services and your Third-Party Account by
                                contacting us using the contact information
                                below or through your account settings (if
                                applicable). We will attempt to delete any
                                information stored on our servers that was
                                obtained through such Third-Party Account,
                                except the username and profile picture that
                                became associated with your account.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="third-party-websites-and-content"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <LinkIcon size={16} /> 9. Third-Party Websites and
                            Content
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                The Services may contain (or you may be sent via
                                the Services) links to other websites (&quot;
                                <b className="font-semibold text-foreground">
                                    Third-Party Websites
                                </b>
                                &quot;) as well as articles, photographs, text,
                                graphics, pictures, designs, music, sound,
                                video, information, applications, software, and
                                other content or items belonging to or
                                originating from third parties (&quot;
                                <b className="font-semibold text-foreground">
                                    Third-Party Content
                                </b>
                                &quot;). Such Third-Party Websites and
                                Third-Party Content are not investigated,
                                monitored, or checked for accuracy,
                                appropriateness, or completeness by us, and we
                                are not responsible for any Third-Party Websites
                                accessed through the Services or any Third-Party
                                Content posted on, available through, or
                                installed from the Services, including the
                                content, accuracy, offensiveness, opinions,
                                reliability, privacy practices, or other
                                policies of or contained in the Third-Party
                                Websites or the Third-Party Content. Inclusion
                                of, linking to, or permitting the use or
                                installation of any Third-Party Websites or any
                                Third-Party Content does not imply approval or
                                endorsement thereof by us. If you decide to
                                leave the Services and access the Third-Party
                                Websites or to use or install any Third-Party
                                Content, you do so at your own risk, and you
                                should be aware these Legal Terms no longer
                                govern.
                            </p>
                            <p>
                                You should review the applicable terms and
                                policies, including privacy and data gathering
                                practices, of any website to which you navigate
                                from the Services or relating to any
                                applications you use or install from the
                                Services. Any purchases you make through
                                Third-Party Websites will be through other
                                websites and from other companies, and we take
                                no responsibility whatsoever in relation to such
                                purchases which are exclusively between you and
                                the applicable third party. You agree and
                                acknowledge that we do not endorse the products
                                or services offered on Third-Party Websites and
                                you shall hold us harmless from any harm caused
                                by your purchase of such products or services.
                                Additionally, you shall hold us harmless from
                                any losses sustained by you or harm caused to
                                you relating to or resulting in any way from any
                                Third-Party Content or any contact with
                                Third-Party Websites.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="services-management"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <SlidersHorizontal size={16} /> 10. Services
                            Management
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                We reserve the right, but not the obligation,
                                to:
                            </p>
                            <ul className="list-outside list-disc pl-8">
                                <li>
                                    Monitor the Services for violations of these
                                    Legal Terms;
                                </li>
                                <li>
                                    Take appropriate legal action against anyone
                                    who, in our sole discretion, violates the
                                    law or these Legal Terms, including without
                                    limitation, reporting such user to law
                                    enforcement authorities;
                                </li>
                                <li>
                                    In our sole discretion and without
                                    limitation, refuse, restrict access to,
                                    limit the availability of, or disable (to
                                    the extent technologically feasible) any of
                                    your Contributions or any portion thereof;
                                </li>
                                <li>
                                    In our sole discretion and without
                                    limitation, notice, or liability, to remove
                                    from the Services or otherwise disable all
                                    files and content that are excessive in size
                                    or are in any way burdensome to our systems;
                                </li>
                                <li>
                                    Otherwise manage the Services in a manner
                                    designed to protect our rights and property
                                    and to facilitate the proper functioning of
                                    the Services.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="privacy-policy"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <FileKey2 size={16} /> 11. Privacy Policy
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                We care about data privacy and security. Please
                                review our{' '}
                                <Link
                                    className="text-foreground"
                                    href="/legal/privacy-policy">
                                    Privacy Policy
                                </Link>
                                . By using the Services, you agree to be bound
                                by our Privacy Policy, which is incorporated
                                into these Legal Terms. Please be advised the
                                Services are hosted in the United States. If you
                                access the Services from any other region of the
                                world with laws or other requirements governing
                                personal data collection, use, or disclosure
                                that differ from applicable laws in the United
                                States, then through your continued use of the
                                Services, you are transferring your data to the
                                United States, and you agree to have your data
                                transferred to and processed in the United
                                States.
                            </p>
                            <p>
                                Further, we do not knowingly accept, request, or
                                solicit information from children or knowingly
                                market to children. Therefore, in accordance
                                with the U.S. Children’s Online Privacy
                                Protection Act, if we receive actual knowledge
                                that anyone under the age of 13 has provided
                                personal information to us without the requisite
                                and verifiable parental consent, we will delete
                                that information from the Services as quickly as
                                is reasonably practical.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="copyright-infringements"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <AlertCircle size={16} /> 12. Copyright
                            Infringements
                        </h1>
                        <div className="p-4">
                            <p>
                                We respect the intellectual property rights of
                                others. If you believe that any material
                                available on or through the Services infringes
                                upon any copyright you own or control, please
                                immediately notify us using the contact
                                information provided below (a &quot;
                                <b className="font-semibold text-foreground">
                                    Notification
                                </b>
                                &quot;). A copy of your Notification will be
                                sent to the person who posted or stored the
                                material addressed in the Notification. Please
                                be advised that pursuant to applicable law you
                                may be held liable for damages if you make
                                material misrepresentations in a Notification.
                                Thus, if you are not sure that material located
                                on or linked to by the Services infringes your
                                copyright, you should consider first contacting
                                an attorney.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="term-and-termination"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <CalendarDays size={16} /> 13. Term and Termination
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                These Legal Terms shall remain in full force and
                                effect while you use the Services.{' '}
                                <span className="font-bold text-white">
                                    Without limiting any other provision of
                                    these legal terms, we reserve the right to,
                                    in our sole discretion and without notice or
                                    liability, deny access to and use of the
                                    services (including blocking certain IP
                                    addresses), to any person for any reason or
                                    for no reason, including without limitation
                                    for breach of any representation, warranty,
                                    or covenant contained in these legal terms
                                    or of any applicable law or regulation. We
                                    may terminate your use or participation in
                                    the services or delete your account and any
                                    content or information that you posted at
                                    any time, without warning, in our sole
                                    discretion.
                                </span>
                            </p>
                            <p>
                                If we terminate or suspend your account for any
                                reason, you are prohibited from registering and
                                creating a new account under your name, a fake
                                or borrowed name, or the name of any third
                                party, even if you may be acting on behalf of
                                the third party. In addition to terminating or
                                suspending your account, we reserve the right to
                                take appropriate legal action, including without
                                limitation pursuing civil, criminal, and
                                injunctive redress.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="modifications-and-interruptions"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <RefreshCw size={16} /> 14. Modifications and
                            Interruptions
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                We reserve the right to change, modify, or
                                remove the contents of the Services at any time
                                or for any reason at our sole discretion without
                                notice. However, we have no obligation to update
                                any information on our Services. We also reserve
                                the right to modify or discontinue all or part
                                of the Services without notice at any time. We
                                will not be liable to you or any third party for
                                any modification, price change, suspension, or
                                discontinuance of the Services.
                            </p>
                            <p>
                                We cannot guarantee the Services will be
                                available at all times. We may experience
                                hardware, software, or other problems or need to
                                perform maintenance related to the Services,
                                resulting in interruptions, delays, or errors.
                                We reserve the right to change, revise, update,
                                suspend, discontinue, or otherwise modify the
                                Services at any time or for any reason without
                                notice to you. You agree that we have no
                                liability whatsoever for any loss, damage, or
                                inconvenience caused by your inability to access
                                or use the Services during any downtime or
                                discontinuance of the Services. Nothing in these
                                Legal Terms will be construed to obligate us to
                                maintain and support the Services or to supply
                                any corrections, updates, or releases in
                                connection therewith.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="governing-law"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <Gavel size={16} /> 15. Governing Law
                        </h1>
                        <div className="p-4">
                            <p>
                                These Legal Terms are governed by and
                                interpreted following the laws of England and
                                Wales, and the use of the United Nations
                                Convention of Contracts for the International
                                Sales of Goods is expressly excluded. If your
                                habitual residence is in the EU, and you are a
                                consumer, you additionally possess the
                                protection provided to you by obligatory
                                provisions of the law in your country to
                                residence. wanderer.moe and yourself both agree
                                to submit to the non-exclusive jurisdiction of
                                the courts of England, which means that you may
                                make a claim to defend your consumer protection
                                rights in regards to these Legal Terms in
                                England, or in the EU country in which you
                                reside.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="dispute-resolution"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <LifeBuoy size={16} /> 16. Dispute Resolution
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                <span className="font-bold text-white">
                                    Informal Negotiations
                                </span>
                            </p>
                            <p className="mb-4">
                                To expedite resolution and control the cost of
                                any dispute, controversy, or claim related to
                                these Legal Terms (each a &quot;
                                <b className="font-semibold text-foreground">
                                    Dispute
                                </b>
                                &quot; and collectively, the &quot;
                                <b className="font-semibold text-foreground">
                                    Disputes
                                </b>
                                &quot;) brought by either you or us
                                (individually, a &quot;
                                <b className="font-semibold text-foreground">
                                    Party
                                </b>
                                &quot; and collectively, the &quot;
                                <b className="font-semibold text-foreground">
                                    Parties
                                </b>
                                &quot;), the Parties agree to first attempt to
                                negotiate any Dispute (except those Disputes
                                expressly provided below) informally for at
                                least thirty (30) days before initiating
                                arbitration. Such informal negotiations commence
                                upon written notice from one Party to the other
                                Party.
                            </p>
                            <p className="mb-4">
                                <span className="font-bold text-white">
                                    Binding Arbitration
                                </span>
                            </p>
                            <p className="mb-4">
                                Any dispute arising from the relationships
                                between the Parties to these Legal Terms shall
                                be determined by one arbitrator who will be
                                chosen in accordance with the Arbitration and
                                Internal Rules of the European Court of
                                Arbitration being part of the European Centre of
                                Arbitration having its seat in Strasbourg, and
                                which are in force at the time the application
                                for arbitration is filed, and of which adoption
                                of this clause constitutes acceptance. The seat
                                of arbitration shall be England. The language of
                                the proceedings shall be English. Applicable
                                rules of substantive law shall be the law of
                                England.
                            </p>
                            <p className="mb-4">
                                <span className="font-bold text-white">
                                    Restrictions
                                </span>
                            </p>
                            <p className="mb-4">
                                The Parties agree that any arbitration shall be
                                limited to the Dispute between the Parties
                                individually. To the full extent permitted by
                                law, (a) no arbitration shall be joined with any
                                other proceeding; (b) there is no right or
                                authority for any Dispute to be arbitrated on a
                                class-action basis or to utilise class action
                                procedures; and (c) there is no right or
                                authority for any Dispute to be brought in a
                                purported representative capacity on behalf of
                                the general public or any other persons.
                            </p>
                            <p className="mb-4">
                                <span className="font-bold text-white">
                                    Exceptions to Informal Negotiations and
                                    Arbitration
                                </span>
                            </p>
                            <p className="mb-4">
                                The Parties agree that the following Disputes
                                are not subject to the above provisions
                                concerning informal negotiations and binding
                                arbitration:
                            </p>
                            <ul className="mb-4 list-outside list-disc pl-8">
                                <li>
                                    Any Disputes seeking to enforce or protect,
                                    or concerning the validity of, any of the
                                    intellectual property rights of a Party;
                                </li>
                                <li>
                                    Any Dispute related to, or arising from,
                                    allegations of theft, piracy, invasion of
                                    privacy, or unauthorised use;
                                </li>
                                <li>Any claim for injunctive relief.</li>
                            </ul>
                            <p>
                                If this provision is found to be illegal or
                                unenforceable, then neither Party will elect to
                                arbitrate any Dispute falling within that
                                portion of this provision found to be illegal or
                                unenforceable and such Dispute shall be decided
                                by a court of competent jurisdiction within the
                                courts listed for jurisdiction above, and the
                                Parties agree to submit to the personal
                                jurisdiction of that court.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="corrections"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <ClipboardEdit size={16} /> 17. Corrections
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                There may be information on the Services that
                                contains typographical errors, inaccuracies, or
                                omissions that may relate to the Services,
                                including descriptions, availability, and
                                various other information. We reserve the right
                                to correct any errors, inaccuracies, or
                                omissions and to change or update the
                                information on the Services at any time, without
                                prior notice.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-destructive/25">
                        <h1
                            id="disclaimer"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-destructive/25 py-2 text-base text-white">
                            <AlertTriangle size={16} /> 18. Disclaimer
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                The services are provided on an as-is and
                                as-available basis. You agree that your use of
                                the services will be at your sole risk. To the
                                fullest extent permitted by law, we disclaim all
                                warranties, express or implied, in connection
                                with the services and your use thereof,
                                including, without limitation, the implied
                                warranties of merchantability, fitness for a
                                particular purpose, and non-infringement. We
                                make no warranties or representations about the
                                accuracy or completeness of the services&apos;
                                content or the content of any websites or mobile
                                applications linked to the services and we will
                                assume no liability or responsibility for any:
                            </p>
                            <ul className="mb-4 list-outside list-disc pl-8">
                                <li>
                                    Errors, mistakes, or inaccuracies of content
                                    and materials,
                                </li>
                                <li>
                                    Personal injury or property damage, of any
                                    nature whatsoever, resulting from your
                                    access to and use of the services,
                                </li>
                                <li>
                                    Any unauthorised access to or use of our
                                    secure servers and/or any and all personal
                                    information stored therein,
                                </li>
                                <li>
                                    Any interruption or cessation of
                                    transmission to or from the services,
                                </li>
                                <li>
                                    Any bugs, viruses, trojan horses, or the
                                    like which may be transmitted to or through
                                    the services by any third party,
                                </li>
                                <li>
                                    Any errors or omissions in any content and
                                    materials or for any loss or damage of any
                                    kind incurred as a result of the use of any
                                    content posted, transmitted, or otherwise
                                    made available via the services.
                                </li>
                            </ul>
                            <p>
                                We do not warrant, endorse, guarantee, or assume
                                responsibility for any product or service
                                advertised or offered by a third party through
                                the services, any hyperlinked website or mobile
                                application, or any website or mobile
                                application featured in any banner or other
                                advertising, and we will not be a party to or in
                                any way be responsible for monitoring any
                                transaction between you and any third-party
                                providers of products or services. As with the
                                purchase of a product or service through any
                                medium or in any environment, you should use
                                your best judgment and exercise caution where
                                appropriate.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-destructive/25">
                        <h1
                            id="limitations-of-liability"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-destructive/25 py-2 text-base text-white">
                            <ShieldAlert size={16} /> 19. Limitations of
                            Liability
                        </h1>
                        <div className="p-4">
                            <p>
                                In no event will we or our directors, employees,
                                agents, developers, or any associates be liable
                                to you or any third party for any direct,
                                indirect, consequential, exemplary, incidental,
                                special, or punitive damages, including lost
                                profit, lost revenue, loss of data, or other
                                damages arising from your use of the services,
                                even if we have been advised of the possibility
                                of such damages.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="indemnification"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <Umbrella size={16} /> 20. Indemnification
                        </h1>
                        <div className="p-4">
                            <p className="mb-4">
                                You agree to defend, indemnify, and hold us
                                harmless, including our subsidiaries,
                                affiliates, and all of our respective officers,
                                agents, partners, and employees, from and
                                against any loss, damage, liability, claim, or
                                demand, including reasonable attorneys&apos;
                                fees and expenses, made by any third party due
                                to or arising out of:
                            </p>
                            <ul className="mb-4 list-outside list-disc pl-8">
                                <li>Your Contributions;</li>
                                <li>Use of the Services;</li>
                                <li>Breach of these Legal Terms;</li>
                                <li>
                                    Any breach of your representations and
                                    warranties set forth in these Legal Terms;
                                </li>
                                <li>
                                    Your violation of the rights of a third
                                    party, including but not limited to
                                    intellectual property rights;
                                </li>
                                <li>
                                    Any overt harmful act toward any other user
                                    of the Services with whom you connected via
                                    the Services.
                                </li>
                            </ul>
                            <p>
                                Notwithstanding the foregoing, we reserve the
                                right, at your expense, to assume the exclusive
                                defence and control of any matter for which you
                                are required to indemnify us, and you agree to
                                cooperate, at your expense, with our defence of
                                such claims. We will use reasonable efforts to
                                notify you of any such claim, action, or
                                proceeding which is subject to this
                                indemnification upon becoming aware of it.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="user-data"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <Database size={16} /> 21. User Data
                        </h1>
                        <div className="p-4">
                            <p>
                                We will maintain certain data that you transmit
                                to the Services for the purpose of managing the
                                performance of the Services, as well as data
                                relating to your use of the Services. Although
                                we perform regular routine backups of data, you
                                are solely responsible for all data that you
                                transmit or that relates to any activity you
                                have undertaken using the Services. You agree
                                that we shall have no liability to you for any
                                loss or corruption of any such data, and you
                                hereby waive any right of action against us
                                arising from any such loss or corruption of such
                                data.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="electronic-communications"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <Mail size={16} /> 21. Electronic Communications
                        </h1>
                        <div className="p-4">
                            <p>
                                Visiting the Services, sending us emails, and
                                completing online forms constitute electronic
                                communications. You consent to receive
                                electronic communications, and you agree that
                                all agreements, notices, disclosures, and other
                                communications we provide to you electronically,
                                via email and on the Services, satisfy any legal
                                requirement that such communication be in
                                writing.{' '}
                                <b className="font-bold text-white">
                                    You hereby agree to the use of electronic
                                    signatures, contracts, orders, and other
                                    records, and to electronic delivery of
                                    notices, policies, and records of
                                    transactions initiated or completed by us or
                                    via the services.
                                </b>{' '}
                                You hereby waive any rights or requirements
                                under any statutes, regulations, rules,
                                ordinances, or other laws in any jurisdiction
                                which require an original signature or delivery
                                or retention of non-electronic records, or to
                                payments or the granting of credits by any means
                                other than electronic means.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="california-users-and-residents"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <MapPin size={16} /> 23. California Users and
                            Residents
                        </h1>
                        <div className="p-4">
                            <p>
                                If any complaint with us is not satisfactorily
                                resolved, you can contact the Complaint
                                Assistance Unit of the Division of Consumer
                                Services of the California Department of
                                Consumer Affairs in writing at 1625 North Market
                                Blvd., Suite N 112, Sacramento, California 95834
                                or by telephone at (800) 952-5210 or (916)
                                445-1254.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="miscellaneous"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <MoreHorizontal size={16} /> 24. Miscellaneous
                        </h1>
                        <div className="p-4">
                            <p>
                                These Legal Terms and any policies or operating
                                rules posted by us on the Services or in respect
                                to the Services constitute the entire agreement
                                and understanding between you and us. Our
                                failure to exercise or enforce any right or
                                provision of these Legal Terms shall not operate
                                as a waiver of such right or provision. These
                                Legal Terms operate to the fullest extent
                                permissible by law. We may assign any or all of
                                our rights and obligations to others at any
                                time. We shall not be responsible or liable for
                                any loss, damage, delay, or failure to act
                                caused by any cause beyond our reasonable
                                control. If any provision or part of a provision
                                of these Legal Terms is determined to be
                                unlawful, void, or unenforceable, that provision
                                or part of the provision is deemed severable
                                from these Legal Terms and does not affect the
                                validity and enforceability of any remaining
                                provisions. There is no joint venture,
                                partnership, employment or agency relationship
                                created between you and us as a result of these
                                Legal Terms or use of the Services. You agree
                                that these Legal Terms will not be construed
                                against us by virtue of having drafted them. You
                                hereby waive any and all defences you may have
                                based on the electronic form of these Legal
                                Terms and the lack of signing by the parties
                                hereto to execute these Legal Terms.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1
                            id="contact-us"
                            className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <PhoneCall size={16} /> 25. Contact Us
                        </h1>
                        <div className="p-4">
                            <p>
                                In order to resolve a complaint regarding the
                                Services or to receive further information
                                regarding use of the Services, please contact us
                                at:{' '}
                                <Link href="mailto:support@wanderer.moe">
                                    support@wanderer.moe
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
