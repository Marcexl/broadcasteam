import video from './video/video.mp4';

function Video() {
    return(
        <>
        <div className='w-full relative h-screen video-container' id="home">
            <video muted={true} autoPlay={true} loop={true}>
                <source src={video} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
        </div>

        </>
    );
}

export default Video;