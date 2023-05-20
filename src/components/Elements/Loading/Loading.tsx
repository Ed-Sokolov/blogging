type LoadingProps = {
    size?: string;
    color?: string;
}

export const Loading: React.FC<LoadingProps> = ({size = "200px", color = "#b3cdea"}) => {
    return (
        <div className="loading_field">
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100"
                 preserveAspectRatio="xMidYMid">
                <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill={color} stroke="none">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite"
                                      keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
                </path>
            </svg>
        </div>
    )
}