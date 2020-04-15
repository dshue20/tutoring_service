import React from 'react';

class TutorForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.createPost(newPost);
        this.setState({
            body: ''
        })
    }

    update(property){
        return e => this.setState({[property]: e.currentTarget.value});
    };

    render(){
        //debugger;
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Name
                    <input type="text" />
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
};

export default TutorForm;