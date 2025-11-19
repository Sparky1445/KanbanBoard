function InProgress({ ProgressData }) {
    console.log(ProgressData);

    return (
        <div className="InProgress">

            <button>{ProgressData.percentage}</button>
            <h2>{ProgressData.title}</h2>
            <p>{ProgressData.description}</p>
            <p>{ProgressData.dueDate} , {ProgressData.dueTime}</p>
        </div>

    )
}

export default InProgress