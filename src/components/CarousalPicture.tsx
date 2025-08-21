interface Props {
    className?: string;
    src: string;
    alt?: string
}

const CarousalPicture = ({ className, src, alt = 'img' }: Props) => {
    return (
        <img
            className={className}
            src={src}
            alt={alt}
        />
    )
}

export default CarousalPicture