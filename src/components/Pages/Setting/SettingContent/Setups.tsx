import {RemoveField} from "../../../Elements/RemoveField/RemoveField";

type SetupsProps = {
    loading: boolean;
    handleRemoveUser: (id: number) => void;
    userId: number | null;
}

export const Setups: React.FC<SetupsProps> = ({loading, userId, handleRemoveUser}) => {
    const removeUser = (id: number | null) => {
        if(id !== null) {
            handleRemoveUser(id)
        }
    }

    return (
        <div className="setups_item">
            <div className="remove_field">
                <RemoveField text="delete account" collback={() => removeUser(userId)} loading={loading}/>
            </div>
        </div>
    )
}