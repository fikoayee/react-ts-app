import classes from "../../styles/PostForm.module.css"

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface Props {
    albumId: number;
}

const PhotoForm: React.FC<Props> = ({ albumId }) => {
    
        function handleSubmit(event: any) {
            event.preventDefault();
    
            const formData = new FormData(event.target);
        }
    
        return (
            <form onSubmit={handleSubmit} className={classes.form}>
                <h2>Add Photo:</h2>
                <p>
                    <label htmlFor="name">Title</label>
                    <input id="name" type="text" name="name" required />
                </p>
                <p>
                    <label htmlFor="body">Content</label>
                    <textarea id="body" name="body" rows={5} required />
                </p>
                <div className={classes.actions}>
                    <button type="button">Cancel</button>
                    <button type="button">Clear</button>
                    <button onClick={handleSubmit}>Comment</button>
                </div>
            </form>
        );
};
export default PhotoForm;