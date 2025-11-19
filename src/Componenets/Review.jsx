function Review({ ReviewData }) {


    return (
        <div className="Review">


            <h2>{ReviewData.title}</h2>
            <p>{ReviewData.ToBeReviewed}</p>
            <p> {ReviewData.ReviewedTillNow} </p>
            <p>{ReviewData.ReviewedBy}</p>
            <p>{ReviewData.dueDate} , {ReviewData.dueTime}</p>
        </div>

    )
}

export default Review