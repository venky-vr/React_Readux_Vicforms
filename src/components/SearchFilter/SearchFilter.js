import React, { Component } from 'react';
import data from "../../data.json";
import { Input} from 'antd';


const { Search } = Input;

//const onSearch = value =>  console.log(value);
    

class SearchFilter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: data,
            searchString: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            products: e.target.value,
            products: this.state.products
        });
    }

   
    render() {
        
        var products = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();
        if (searchString.length > 0) {
            products = products.filter(function (i) {
                return i.name.toLowerCase().match(searchString);
            });
        }
        console.log(data)

        return (
            <div>
                
             <Search onChange={this.handleChange} placeholder="Search Contracts" enterButton />
            
                {
                !this.props.products ? (
                    <div></div>
                ) : (
                <ul>
                    {
                        this.props.products.map(i =>(
                            <li>{i.name}</li>
                        ))
                      
                    }
                </ul>
                )}
            </div>
        )
    }
}

export default SearchFilter;