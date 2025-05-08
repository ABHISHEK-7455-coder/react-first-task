export default function Button({classGiven, label, onSmash}){
    return (
        <button className={classGiven} onClick = {onSmash}>{label}</button>
    )
}