export const addNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore
            .collection("notes")
            .add({
                ...note,
                favorite: false,
                createdAt: new Date(),
            })
            .then(() => {
                // dispatch({ type: "CREATE_PROJECT_SUCCESS", project });
            })
            .catch((err) => {
                console.log(err)
            });
    };

}

export const deleteNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).delete()
            .then(() => {
                // dispatch({ type: "CREATE_PROJECT_SUCCESS", project });
            })
            .catch((err) => {
                console.log(err)
            });
    };

}

export const toggleFav = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const favStatus = !note.favorite;
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).update(
            {favorite : favStatus
        }).then(() => {
            console.log('toggle favorite success')
        }).catch (err => {
            console.log(err)
        })
      
    };
}

export const updateNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        console.log(note)
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).update(
            {
                title: note.title,
                content: note.content
        }).then(() => {
            console.log('The note has been updated successfully')
        }).catch (err => {
            console.log(err)
        })
      
    };
}