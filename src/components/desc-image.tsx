interface DescriptionImageProps {
    url: string;
    alt: string;
    title?: string;
    description?: string;
}

export function DescriptionImage({
    url,
    alt,
    title,
    description,
}: Readonly<DescriptionImageProps>) {
    return (
        <div className="relative flex flex-col gap-2">
            <div className="relative w-full h-48">
                <img
                    src={url}
                    alt={alt}
                    className="rounded-lg object-cover object-offset-center w-full h-full opacity-75"
                />
                <div className="absolute inset-0 flex flex-col gap-1 justify-center items-center text-center bg-black rounded-lg bg-opacity-50">
                    <h1 className="text-4xl font-semibold text-primary tracking-tight">
                        {title}
                    </h1>
                    <p className="text-muted-foreground">{description}</p>
                </div>
            </div>
        </div>
    );
}
