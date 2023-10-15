import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import {
    Baby,
    Clock,
    Cog,
    Cookie,
    Eraser,
    EyeOff,
    FileInput,
    FileKey2,
    Globe,
    MailQuestion,
    MapPin,
    RefreshCw,
    Share2,
    ShieldCheck,
    SquareSlash,
    UserSquare,
    Home,
    ChevronRight,
} from 'lucide-react'
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
                    Privacy Policy
                </div>
            </div>
            <div className="rounded-xl border bg-secondary-dark">
                <h1 className="flex items-center justify-center gap-2 rounded-t-xl bg-background py-2 text-base">
                    <FileKey2 size={16} /> Privacy Policy
                </h1>
                <Separator />
                <div className="my-2 flex h-5 items-center justify-center gap-4 text-xs text-muted-foreground/60">
                    Last updated: 2023-08-03
                    <Separator orientation="vertical" />
                    Effective: 2023-08-03
                </div>
                <Separator />
                <div className="p-4 pb-0 text-muted-foreground">
                    <p className="mb-4">
                        This privacy policy for{' '}
                        <Link
                            className="text-foreground"
                            href="https://wanderer.moe/">
                            wanderer.moe
                        </Link>{' '}
                        (&quot;
                        <b className="font-semibold text-foreground">we</b>
                        ,&quot; &quot;
                        <b className="font-semibold text-foreground">us</b>
                        ,&quot; or &quot;
                        <b className="font-semibold text-foreground">our</b>
                        ,&quot;), describes how and why we might collect, store,
                        use, and/or share (&quot;
                        <b className="font-semibold text-foreground">process</b>
                        &quot;) your information when you use our services
                        (&quot;
                        <b className="font-semibold text-foreground">
                            Services
                        </b>
                        &quot;).
                    </p>
                    <p className="mb-4">
                        <b className="font-semibold text-foreground">
                            Questions or concerns?
                        </b>{' '}
                        Reading this privacy policy will help you understand
                        your privacy rights and choices. If you do not agree
                        with our policies and practices, please do not use our
                        Services. If you still have any questions or concerns,
                        please contact us at{' '}
                        <Link
                            className="text-foreground"
                            href="mailto:privacy@wanderer.moe">
                            privacy@wanderer.moe
                        </Link>
                        .
                    </p>
                    <div className="mb-4 rounded-xl border bg-background">
                        <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base text-white">
                            <SquareSlash size={16} /> Summary
                        </h1>
                        <div className="m-4 flex items-center justify-center gap-4 text-xs text-muted-foreground/60">
                            Below is a summary which provides key points from
                            our privacy policy. You can learn about more details
                            for these topics by clicking the link following each
                            key point, or by using our collapsible dropdowns to
                            find what you are looking for.
                        </div>
                        <Separator />
                        <div className="p-4">
                            <p className="mb-4">
                                <b className="font-semibold text-foreground">
                                    What personal information do we process?
                                </b>{' '}
                                When you visit, use, or navigate our Services,
                                we may process personal information depending on
                                how you interact with wanderer.moe and the
                                Services, the choices you make, and the products
                                and features you use.{' '}
                                <Link
                                    className="text-foreground"
                                    href="#information-collection">
                                    Learn more about personal information you
                                    disclose to us.
                                </Link>
                            </p>
                            <p className="mb-4">
                                <b className="font-semibold text-foreground">
                                    Do we process any sensitive personal
                                    information?
                                </b>{' '}
                                We do not process sensitive personal
                                information.
                            </p>
                            <p className="mb-4">
                                <b className="font-semibold text-foreground">
                                    Do we receive any information from third
                                    parties?
                                </b>{' '}
                                The only information we receive from third
                                parties includes Cloudflare Analytics and Google
                                Search Console, which aggregate and display
                                information as a whole (and not of individual
                                users).
                            </p>
                            <p className="mb-4">
                                <b className="font-semibold text-foreground">
                                    How do we process your information?
                                </b>{' '}
                                We process your information to provide, improve,
                                and administer our Services, communicate with
                                you, for security and fraud prevention, and to
                                comply with law. We may also process your
                                information for other purposes with your
                                consent. We process your information only when
                                we have a valid legal reason to do so.{' '}
                                <Link
                                    className="text-foreground"
                                    href="#information-processing">
                                    Learn more about how we process your
                                    information.
                                </Link>
                            </p>
                            <p className="mb-4">
                                <b className="font-semibold text-foreground">
                                    In what situations and with which parties do
                                    we share personal information?
                                </b>{' '}
                                We do not share your personal information with
                                any third parties.
                            </p>
                            <p className="mb-4">
                                <b className="font-semibold text-foreground">
                                    What are your rights?
                                </b>{' '}
                                Depending on where you are located
                                geographically, the applicable privacy law may
                                mean you have certain rights regarding your
                                personal information.{' '}
                                <Link
                                    className="text-foreground"
                                    href="#privacy-rights">
                                    Learn more about your privacy rights.
                                </Link>
                            </p>
                            <p>
                                <b className="font-semibold text-foreground">
                                    How do you exercise your rights?
                                </b>{' '}
                                The easiest way to exercise your rights is by
                                submitting a data subject access request, or by
                                contacting us. We will consider and act upon any
                                request in accordance with applicable data
                                protection laws.
                            </p>
                        </div>
                    </div>
                    <p className="mb-4">
                        Below is the full privacy policy, if you wish to review
                        it.
                    </p>
                    <Separator />
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem
                            id="#information-collection"
                            value="item-1">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <FileInput size={20} />
                                </span>{' '}
                                What information do we collect?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        Personal information you disclose to us
                                    </b>
                                </p>
                                <p className="mb-4">
                                    We collect personal information that you
                                    voluntarily provide to us when you register
                                    on the Services, express an interest in
                                    obtaining information about us or our
                                    products and Services, when you participate
                                    in activities on the Services, or otherwise
                                    when you contact us.
                                </p>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        Sensitive information
                                    </b>
                                </p>
                                <p className="mb-4">
                                    We do not process sensitive information.
                                </p>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        Information automatically collected
                                    </b>
                                </p>
                                <p className="mb-4">
                                    We automatically collect certain information
                                    when you visit, use, or navigate the
                                    Services. This information does not reveal
                                    your specific identity (like your name or
                                    contact information) but may include device
                                    and usage information, such as your browser
                                    and device characteristics, operating
                                    system, language preferences, referring
                                    URLs, device name, country, location,
                                    information about how and when you use our
                                    Services, and other technical information.
                                    This information is primarily needed to
                                    maintain the security and operation of our
                                    Services, and for our internal analytics and
                                    reporting purposes. We do not collect
                                    Internet Protocol (IP) addresses.
                                </p>
                                <p>
                                    Like many businesses, we also collect
                                    information through cookies and similar
                                    technologies. Read our cookie policy for
                                    more information.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            id="#information-processing"
                            value="item-2">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <Cog size={20} />
                                </span>{' '}
                                How do we process your information?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        We process your information to provide,
                                        improve, and administer our Services,
                                        communicate with you, for security and
                                        fraud prevention, and to comply with
                                        law. We may also process your
                                        information for other purposes with your
                                        consent.
                                    </b>
                                </p>
                                <p className="mb-4">
                                    We process your personal information for a
                                    variety of reasons, depending on how you
                                    interact with our Services, including:
                                </p>
                                <ul className="mb-4 list-inside list-disc">
                                    <li className="mb-2">
                                        <b className="font-semibold text-foreground">
                                            Providing and improving our
                                            Services.
                                        </b>{' '}
                                        We may use your information to improve
                                        and customize our Services, such as by
                                        providing additional features, and to
                                        provide technical support.
                                    </li>
                                    <li className="mb-2">
                                        <b className="font-semibold text-foreground">
                                            Communicating with you.
                                        </b>{' '}
                                        We may use your information to
                                        communicate with you about your account
                                        or our relationship. We may also contact
                                        you about our Services.
                                    </li>
                                    <li className="mb-2">
                                        <b className="font-semibold text-foreground">
                                            For security and fraud prevention.
                                        </b>{' '}
                                        We may use your information to protect
                                        our Services, our company, our
                                        customers, or our websites.
                                    </li>
                                    <li className="mb-2">
                                        <b className="font-semibold text-foreground">
                                            To comply with law.
                                        </b>{' '}
                                        We may use your information to comply
                                        with applicable legal obligations,
                                        including to respond to a subpoena or
                                        court order.
                                    </li>
                                    <li className="mb-2">
                                        <b className="font-semibold text-foreground">
                                            For other purposes with your
                                            consent.
                                        </b>{' '}
                                        We may ask for your consent to process
                                        your information for a specific purpose
                                        not listed above. You may withdraw your
                                        consent at any time by contacting us at{' '}
                                        <Link
                                            className="text-foreground"
                                            href="mailto:privacy@wanderer.moe">
                                            privacy@wanderer.moe
                                        </Link>
                                        .
                                    </li>
                                </ul>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        In what situations and with which
                                        parties do we share personal
                                        information?
                                    </b>
                                </p>
                                <p>
                                    We do not share your personal information
                                    with any third parties.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem id="#sharing-information" value="item-3">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <UserSquare size={20} />
                                </span>{' '}
                                When and with whom do we share your personal
                                information?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    We do not share your personal information
                                    with any third parties.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem id="#cookies" value="item-4">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <Cookie size={20} />
                                </span>{' '}
                                Do we use cookies and other tracking
                                technologies?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        We may use cookies and other tracking
                                        technologies to collect and store your
                                        information.
                                    </b>
                                </p>
                                <p className="mb-4">
                                    Cookies are files with small amounts of data
                                    that are commonly used as anonymous unique
                                    identifiers. These are sent to your browser
                                    from the websites that you visit and are
                                    stored on your devices internal memory.
                                </p>
                                <p className="mb-4">
                                    Cookies are used by this site to store
                                    information such as your preferences when
                                    you visit a website. This could include
                                    things like your theme preference (i.e
                                    translations), or your current login session
                                    (if you are logged in).
                                </p>
                                <p>
                                    For more information about our cookie usage,
                                    please read our cookie policy.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem id="#social-logins" value="item-5">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <Share2 size={20} />
                                </span>
                                How do we handle your social logins?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        If you choose to register or log in to
                                        our Services using a social media
                                        account, we may have access to certain
                                        information about you.
                                    </b>
                                </p>
                                <p className="mb-4">
                                    Our Services offer you the ability to
                                    register and log in using your third-party
                                    social media account details (like your
                                    Discord or TikTok logins). Where you choose
                                    to do this, we will receive certain profile
                                    information about you from your social media
                                    provider. The profile information we receive
                                    may vary depending on the social media
                                    provider concerned, but will often include
                                    your email address, profile picture, as well
                                    as other information you choose to make
                                    public on such a social media platform.
                                </p>
                                <p>
                                    We will use the information we receive only
                                    for the purposes that are described in this
                                    privacy notice or that are otherwise made
                                    clear to you on the relevant Services.
                                    Please note that we do not control, and are
                                    not responsible for, other uses of your
                                    personal information by your third-party
                                    social media provider. We recommend that you
                                    review their privacy notice to understand
                                    how they collect, use, and share your
                                    personal information, and how you can set
                                    your privacy preferences on their sites and
                                    apps.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            id="#international-information"
                            value="item-6">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <Globe size={20} />
                                </span>
                                Is your information transferred internationally?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        We may transfer, store, and process your
                                        information in countries other than your
                                        own, depending on where our servers are
                                        located.
                                    </b>
                                </p>
                                <p>
                                    If you are a resident in the European
                                    Economic Area (EEA) or United Kingdom (UK),
                                    then these countries may not necessarily
                                    have data protection laws or other similar
                                    laws as comprehensive as those in your
                                    country. However, we will take all necessary
                                    measures to protect your personal
                                    information in accordance with this privacy
                                    notice and applicable law.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            id="#information-retention"
                            value="item-7">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <Clock size={20} />
                                </span>
                                How long do we keep your information?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        We keep your information for as long as
                                        necessary to fulfill the purposes
                                        outlined in this privacy notice unless
                                        otherwise required by law.
                                    </b>
                                </p>
                                <p className="mb-4">
                                    We will only keep your personal information
                                    for as long as it is necessary for the
                                    purposes set out in this privacy notice,
                                    unless a longer retention period is required
                                    or permitted by law.
                                </p>
                                <p>
                                    When we have no ongoing legitimate need to
                                    process your personal information, we will
                                    either delete or anonymize it, or, if this
                                    is not possible (for example, because your
                                    personal information has been stored in
                                    backup archives), then we will securely
                                    store your personal information and isolate
                                    it from any further processing until
                                    deletion is possible.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem id="#u13-collection" value="item-8">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <Baby size={20} />
                                </span>
                                Do we collect information from individuals under
                                the age of 13?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        We do not knowingly collect data from or
                                        market to children under 13 years of
                                        age.
                                    </b>
                                </p>
                                <p>
                                    We do not knowingly solicit data from or
                                    market to children under 13 years of age. By
                                    using the Services, you represent that you
                                    are at least 13 or that you are the parent
                                    or guardian of such a minor and consent to
                                    such minor dependent’s use of the Services.
                                    If we learn that personal information from
                                    users less than 13 years of age has been
                                    collected, we will deactivate the account
                                    and take reasonable measures to promptly
                                    delete such data from our records. If you
                                    become aware of any data we may have
                                    collected from children under age 13, please
                                    contact us at{' '}
                                    <Link
                                        className="text-foreground"
                                        href="mailto:privacy@wanderer.moe">
                                        privacy@wanderer.moe
                                    </Link>
                                    .
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem id="#privacy-rights" value="item-9">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <ShieldCheck size={20} />
                                </span>
                                What are your privacy rights?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        Depending on where you are located
                                        geographically, the applicable privacy
                                        law may mean you have certain rights
                                        regarding your personal information.
                                        However, in general, you may review,
                                        change, or terminate your account at any
                                        time.
                                    </b>
                                </p>
                                <p className="mb-4">
                                    If you are a resident in the European
                                    Economic Area (EEA) or United Kingdom (UK)
                                    and you believe that we are unlawfully
                                    processing your personal information, you
                                    also have the right to complain to your{' '}
                                    <Link
                                        className="text-foreground"
                                        href="https://ec.europa.eu/newsroom/article29/items/612080">
                                        Member State data protection authority
                                    </Link>{' '}
                                    or{' '}
                                    <Link
                                        className="text-foreground"
                                        href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">
                                        UK data protection authority
                                    </Link>
                                    .
                                </p>
                                <p className="mb-4">
                                    If you are located in Switzerland, you may
                                    contact the Swiss Federal{' '}
                                    <Link
                                        className="text-foreground"
                                        href="https://www.edoeb.admin.ch/edoeb/en/home.html">
                                        Data Protection and Information
                                        Commissioner.
                                    </Link>
                                </p>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        Withdrawing your consent:
                                    </b>{' '}
                                    If we are processing your personal
                                    information based on your consent, you may
                                    withdraw your consent at any time by
                                    contacting us at{' '}
                                    <Link
                                        className="text-foreground"
                                        href="mailto:privacy@wanderer.moe">
                                        privacy@wanderer.moe
                                    </Link>
                                    .
                                </p>
                                <p>
                                    However, please note that this will not
                                    affect the lawfulness of the processing
                                    before its withdrawal, nor will it affect
                                    the processing of your personal information
                                    conducted in reliance on lawful processing
                                    grounds other than consent.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem id="#dnt-features" value="item-10">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <EyeOff size={20} />
                                </span>
                                Controls for do-not-track features
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        Most web browsers and some mobile
                                        operating systems and mobile
                                        applications include a Do-Not-Track
                                        (“DNT”) feature or setting you can
                                        activate to signal your privacy
                                        preference not to have data about your
                                        online browsing activities monitored and
                                        collected.
                                    </b>
                                </p>
                                <p>
                                    At this stage, no uniform technology
                                    standard for recognizing and implementing
                                    DNT signals has been finalized. As such, we
                                    do not currently respond to DNT browser
                                    signals or any other mechanism that
                                    automatically communicates your choice not
                                    to be tracked online. If a standard for
                                    online tracking is adopted that we must
                                    follow in the future, we will inform you
                                    about that practice in a revised version of
                                    this privacy notice.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            id="#california-residents"
                            value="item-11">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <MapPin size={20} />
                                </span>
                                Do California residents have specific privacy
                                rights?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        Yes, if you are a resident of
                                        California, you are granted specific
                                        rights regarding access to your personal
                                        information.
                                    </b>
                                </p>
                                <p className="mb-4">
                                    California Civil Code Section 1798.83, also
                                    known as the “Shine The Light” law, permits
                                    our users who are California residents to
                                    request and obtain from us, once a year and
                                    free of charge, information about categories
                                    of personal information (if any) we
                                    disclosed to third parties for direct
                                    marketing purposes and the names and
                                    addresses of all third parties with which we
                                    shared personal information in the
                                    immediately preceding calendar year. If you
                                    are a California resident and would like to
                                    make such a request, please submit your
                                    request in writing to us using the contact
                                    information provided below.
                                </p>
                                <p>
                                    If you are under 18 years of age, reside in
                                    California, and have a registered account
                                    with the Services, you have the right to
                                    request removal of unwanted data that you
                                    publicly post on the Services. To request
                                    removal of such data, please contact us
                                    using the contact information provided
                                    below, and include the email address
                                    associated with your account and a statement
                                    that you reside in California. We will make
                                    sure the data is not publicly displayed on
                                    the Services, but please be aware that the
                                    data may not be completely or
                                    comprehensively removed from our systems.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem id="#notice-updates" value="item-12">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <RefreshCw size={20} />
                                </span>
                                Do we make updates to this policy?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        Yes, we will update this policy as
                                        necessary to stay compliant with
                                        relevant laws.
                                    </b>
                                </p>
                                <p>
                                    We may update this privacy notice from time
                                    to time. The updated version will be
                                    indicated by an updated “Revised” date and
                                    the updated version will be effective as
                                    soon as it is accessible. If we make
                                    material changes to this privacy notice, we
                                    may notify you either by prominently posting
                                    a notice of such changes or by directly
                                    sending you a notification. We encourage you
                                    to review this privacy notice frequently to
                                    be informed of how we are protecting your
                                    information.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem id="#contact" value="item-13">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <MailQuestion size={20} />
                                </span>
                                How can you contact us about this notice?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    If you have questions or comments about this
                                    notice, you may email us at{' '}
                                    <Link
                                        className="text-foreground"
                                        href="mailto:privacy@wanderer.moe">
                                        privacy@wanderer.moe
                                    </Link>
                                    .
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            id="#review"
                            value="item-14"
                            className="border-none">
                            <AccordionTrigger className="text-foreground">
                                <span className="pr-2">
                                    <Eraser size={20} />
                                </span>
                                How can you review, update, or delete the data
                                we collect from you?
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">
                                    <b className="font-semibold text-foreground">
                                        Based on the applicable laws of your
                                        country, you may have the right to
                                        request access to the personal
                                        information we collect from you, change
                                        that information, or delete it in some
                                        circumstances.
                                    </b>
                                </p>
                                <p>
                                    To request to review, update, or delete your
                                    personal information, please submit a
                                    request to the email{' '}
                                    <Link
                                        className="text-foreground"
                                        href="mailto:privacy@wanderer.moe">
                                        privacy@wanderer.moe
                                    </Link>
                                    .
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
