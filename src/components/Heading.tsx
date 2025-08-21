
interface Props {
    text: string;
    class?: string;
}

const heading = (props: Props) => {
    return (
        <h1 className={props.class}>{props.text}</h1>
    )
}

export default heading
