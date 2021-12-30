import {
    React, 
    useEffect,
} from 'react'
import { 
    useDispatch, 
    useSelector 
} from "react-redux";
import MainScreen from '../../../components/MainScreen/MainScreen'
import { 
    Accordion, 
    Badge, 
    Button, 
    Card 
} from 'react-bootstrap';
import { 
    useNavigate,
    Link 
} from "react-router-dom";
import { TitleSpan } from './Notes.styles';
import { deleteNoteAction, listNotes } from '../../../actions/notesActions'
import Loading from '../../../components/Loading/Loading';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

const Notes = () => {
    const dispatch = useDispatch();
    
    const noteList = useSelector(state => state.noteList);
    const { loading, notes, error} = noteList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const noteCreate = useSelector((state) => state.noteCreate);
    const { success: successCreate } = noteCreate;

    const noteUpdate = useSelector((state) => state.noteUpdate);
    const { success: successUpdate } = noteUpdate;

    const noteDelete = useSelector((state) => state.noteDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = noteDelete;

    const deleteHandler = (id) => {
        if(window.confirm("Are you sure ?")){
            dispatch(deleteNoteAction(id));
        }
    }

    console.log(notes)

    const history = useNavigate();

    //This funciton is called as soon as the page is rendered
    useEffect(() => {
        dispatch(listNotes());
        if (!userInfo){
            history('/')
        }
    }, [dispatch, successCreate, successDelete, successUpdate, history, userInfo])


    return (
        <MainScreen title = {`Welcome back ${userInfo.name}`}>
            <Link to='/createnote'>
                <Button>
                    Create New Note
                </Button>
            </Link>
            {error 
            && <ErrorMessage variant='danger'>
                {error}
               </ErrorMessage>
            }
            {errorDelete && (
             <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            {loading && <Loading/>}
            {loadingDelete && <Loading />}
            {notes?.map(note=>( 
                    <Accordion key={note._id}>
                        <Card style={{ margin: 10 }} key={note._id}>
                            <Card.Header style={{ display: "flex" }}>
                            <TitleSpan>
                                <Accordion.Header
                                as={Card.Text}
                                variant="link"
                                >
                                {note.title}
                                </Accordion.Header>
                            </TitleSpan>
                            <div>                            
                                <Link to={`/notes/${note._id}`}>
                                    <Button>Edit</Button>
                                </Link>
                                <Button
                                variant="danger"
                                className="mx-2"
                                onClick={() => deleteHandler(note._id)}
                                >
                                Delete
                                </Button>
                            </div>
                            </Card.Header>
                            <Accordion.Body >
                            <Card.Body>
                                <h4>
                                <Badge variant="success">
                                    Category - {note.category}
                                </Badge>
                                </h4>
                                <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">
                                    Created on{" "}
                                    <cite title="Source Title">
                                        {note.createdAt.substring(0, 10)}
                                    </cite>
                                </footer>
                                </blockquote>
                            </Card.Body>
                            </Accordion.Body>
                        </Card>
                    </Accordion>
                    
                ))
            }        
        </MainScreen>
    )

}

export default Notes
