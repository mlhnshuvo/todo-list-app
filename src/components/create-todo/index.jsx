import React from 'react';
import { Button, Input, FormGroup, Label, Form } from 'reactstrap'
import store from '../../store/index'

class CreateTodo extends React.Component {
    state = {
        text: '',
        des: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        store.dispatch({ type: 'createTodo', payload: this.state })
        event.target.reset()
        this.setState({
            text: '',
            des: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter task</Label>
                    <Input
                        placeholder='Write something'
                        name='text'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <Label>Describe task</Label>
                    <Input
                        placeholder='Write something'
                        name='des'
                        value={this.state.des}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type='submit'>Create task</Button>
            </Form>
        )
    }
}

export default CreateTodo;