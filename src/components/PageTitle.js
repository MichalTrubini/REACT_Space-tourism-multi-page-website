import '../css/pagetitle.css'

const PageTitle = (props) => {

    const classes = props.className + ' pagetitle__heading';

    return (
        <h5 className={classes}>{props.children}</h5>
    )
}

export default PageTitle;