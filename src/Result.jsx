// conditional rendering
// >=50 Passed
// Failed
// ternary operator
// props.marks >=50 ? 'Passed': 'Failed'
// props.marks < 50 ? 'Failed': 'Passed'
// modular
// communication (properties, top to bottom)

function PrintResult(props) {
    return props.marks >= 50 ? <b>Passed</b> : <b>Failed</b>
}

function PrintDetails(props) {
    return <div>
        <h1>Result</h1>
        <h2>{props.name}</h2>
        <h3>{props.marks}</h3>
    </div>
}

function Result(props) {
    return <>
        <PrintDetails name={props.name} marks={props.marks} />
        <PrintResult marks={props.marks} />
    </>
}

export default Result;