interface PictureProps {
    picture: string;
    caption: string;
    location: string;
    description: string;
    mapLink: string;

}

function PicComponent(props: PictureProps): JSX.Element {
    return (
        <section>
            <img src={props.picture} /> {/**why is this not PictureProps.picture */}
            <h3> 
            <span style={{fontWeight: 'bold'}}>{props.caption}</span> 
            </h3>
            <p><span style={{fontWeight: 'bold'}}>{props.location}</span> <a href={props.mapLink}>(see map)</a></p>
            <p>{props.description}</p>
        </section>
    )
}   

export default PicComponent;