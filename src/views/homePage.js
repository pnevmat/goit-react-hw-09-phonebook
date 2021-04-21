import Header from '../components/Header/header';


const HomePage = (props) => {
    const {userName, authorisation} = props;
    return (
        <>
            <Header 
                userName={userName}
                authorisation={authorisation}
            />
            <h1>Home Page</h1>
        </>
    )
};

export default HomePage;