function Done({ DoneData }) {

    return (
        <div className="Done">
            <h2>{DoneData.title}</h2>
            <p>Completed By: {DoneData.doneBy}</p>
            <p>Completed At: {DoneData.timeOfCompletion}</p>
        </div>
    );
}

export default Done;
