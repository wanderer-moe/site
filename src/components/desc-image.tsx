import Image from "next/image";

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
}: DescriptionImageProps) {
    return (
        <div className="relative flex flex-col gap-2">
            <div className="relative w-full h-48">
                <img
                    style={{
                        objectFit: "cover",
                        objectPosition: "50% 20%",
                    }}
                    src={url}
                    alt={alt}
                    className="rounded-lg object-fit w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black rounded-lg bg-opacity-50">
                    <h1 className="text-4xl font-semibold text-primary">
                        {title}
                    </h1>
                    <p className="text-primary">{description}</p>
                </div>
            </div>
        </div>
    );
}
