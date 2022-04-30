import React from 'react'
import NavigationBar from '../component/navigationBar'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carousels: [],
            products: []
        }
    }

   

    render() {
        return (
            <div>
                <NavigationBar />
            </div>
        )
    }
}


   
export default HomePage