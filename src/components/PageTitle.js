import '../css/pagetitle.css'

const PageTitle = (props) => {
    return (
        <h5 className="pagetitle__heading">{props.children}</h5>
    )
}

export default PageTitle;