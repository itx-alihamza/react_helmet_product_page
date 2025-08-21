interface Props {
    className?: string;
    src: string;
    alt?: string
}

const SimplePic = ({ className, src, alt = 'img' }: Props) => {
    return (
        <img
            className={className}
            src={src}
            alt={alt}

        />
    )
}

export default SimplePic
