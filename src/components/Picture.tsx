interface Props {
    classes?: string;
    mobPic?: string;
    desPic?: string;
    alt?: string;
    imgClasses?: string;
}

const Picture = (props: Props) => {
    return (
        <div className={`${props.classes}`}>
            <picture>
                <source media="(min-width: 640px)" srcSet={props.desPic} />
                <img
                    className={props.imgClasses}
                    alt={props.alt}
                    src={props.mobPic}
                    width={1000}
                    height={400}
                />
            </picture>
        </div>
    )
}

export default Picture
