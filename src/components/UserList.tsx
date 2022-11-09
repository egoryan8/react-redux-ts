import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.users);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    },[])

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <h2>Список пользователей: </h2>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;