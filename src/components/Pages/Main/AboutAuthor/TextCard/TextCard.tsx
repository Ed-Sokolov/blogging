type TextCardProps = {
    paragraph: string;
}

export const TextCard = ({paragraph}: TextCardProps) => {
    return (
        <div className="text_card">
            {paragraph}
        </div>
    )
}