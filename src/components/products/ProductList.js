import React from "react";
import Autocomplete from "react-autocomplete";
import products from "./productsList.json";
import Table from "react-bootstrap/Table";

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showProduct: false,
      productItem: {},
    };
  }

  changeProduct = (e) => {
    this.setState({ value: e.target.value }, () => {});
  };
  render() {
    return (
      <React.Fragment>
        <div className="search">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "7px",
            }}
          >
            <Autocomplete
              items={products}
              shouldItemRender={(item, value) =>
                item.title.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              getItemValue={(item) => item.title}
              renderItem={(item, isHighlighted) => (
                <div
                  style={{ background: isHighlighted ? "grey" : "white" }}
                  key={item.title}
                >
                  {item.title}
                </div>
              )}
              value={this.state.value}
              onChange={this.changeProduct}
              onSelect={(value, item) => {
                console.log(item);
                this.setState(
                  { value, showProduct: true, productItem: item },
                  () => {
                    console.log(this.state.value);
                  }
                );
              }}
            />
          </div>
          {this.state.showProduct === true ? (
            <ShowProdcutList items={this.state.productItem}> </ShowProdcutList>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

const ShowProdcutList = (props) => {
  console.log(props);
  const items = props.items
  return (
    <>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Description</th>
            <th>Price </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{items.title}</td>
            <td>{items.type}</td>
            <td>{items.description}</td>
            <td>{items.price}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default ProductList;
