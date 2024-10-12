import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import React from "react";
import Items from "./components/items.js";
import Categories from "./components/Categories.js";
import ShowFullItem from "./components/ShowFullItem.js";
import MainSection from "./components/mainSection.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Chair",
          img: "chair.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          category: "chairs",
          price: "100",
        },
        {
          id: 7,
          title: "Sofa",
          img: "sofa.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          category: "sofas",
          price: "220",
        },

        {
          id: 3,
          title: "Chair",
          img: "chair3.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          category: "chairs",
          price: "100",
        },
        {
          id: 11,
          title: "Lamp",
          img: "lamp2.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          category: "lamps",
          price: "95",
        },
        {
          id: 4,
          title: "Table",
          img: "table.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          category: "tables",
          price: "150",
        },
        {
          id: 8,
          title: "Sofa",
          img: "sofa2.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          category: "sofas",
          price: "560",
        },
        {
          id: 5,
          title: "Table",
          img: "table2.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          category: "tables",
          price: "200",
        },

        {
          id: 12,
          title: "Lamp",
          img: "lamp3.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          category: "lamps",
          price: "125",
        },
        {
          id: 9,
          title: "Sofa",
          img: "sofa3.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          category: "sofas",
          price: "370",
        },
        {
          id: 2,
          title: "Chair",
          img: "chair2.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          category: "chairs",
          price: "120",
        },
        {
          id: 10,
          title: "Lamp",
          img: "lamp.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          category: "lamps",
          price: "50",
        },
        {
          id: 6,
          title: "Table",
          img: "table3.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          category: "tables",
          price: "100",
        },
      ],
      ShowFullItem: false,
      fullItem: {},
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <MainSection />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.ShowFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  deleteOrder = (id) => {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  };

  addToOrder = (item) => {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  };

  chooseCategory = (category) => {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(
        (item) => item.category === category
      ),
    });
  };

  onShowItem = (item) => {
    this.setState({ fullItem: item });
    this.setState({ ShowFullItem: !this.state.ShowFullItem });
  };
}

export default App;
