import {UseSvg} from "../UseSvg/UseSvg";

type RemoveFieldProps = {
    text: string;
    collback: (id?: number) => void;
    loading: boolean;
}

export const RemoveField: React.FC<RemoveFieldProps> = ({text, collback, loading}) => {
    const handleRemove = () => {
        if (!loading) {
            collback();
        }
    }

    return (
        <div className={`remove ${loading ? 'disabled' : 'bottom_hover'}`} onClick={handleRemove}>
            <UseSvg spriteName="trash" className="icon"/>
            {text}
        </div>
    )
}