type Props = {
    label : string;
    value: string;
    placeholder: string;
}

export const Input = ({label, value, placeholder}:Props) => {

    return(
        <div>
            <label>{label}</label>
            <input placeholder={placeholder} >{value}</input>
        </div>
    )
}