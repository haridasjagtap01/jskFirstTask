
function App() {

  //printing student information
  const student =
  {
    name: 'rahul', age: 21
  }

  // calculate total cost of product
  const product = {
    productName: 'wireless mouse',
    quantity: 3,
    price: 499,
  }

  const TotalCost = product.quantity * product.price;

  // check student present or not 
  const student1 = {
    name: 'anjali',
    isPresent: 'true'
  }
  // full name formatting
  const Names = {
    firstName: 'amit',
    lastName: 'sharma'
  }
  const fullName = Names.firstName + ' ' + Names.lastName;

  //loan EMI display
  const loanDetails = {
    loanAmount: 500000,
    interestRate: 8,
    tenureYears: 5
  }
  let p = loanDetails.loanAmount;
  let r = loanDetails.interestRate / (12 * 100);
  let n = loanDetails.tenureYears * 12;

  const EMI = [p * r * (1 + r) ^ n] / [(1 + r) ^ n - 1];

  // employee salary breakdown
  let employee = {
    name: 'suresh',
    basic: 25000,
    hra: 10000
  }
  let totalSalary = employee.basic + employee.hra;

  // Product Discounted price
  let product1 = {
    name: 'smartphone',
    price: 20000,
    discount: 10
  }
  let productPrice = product1.price;
  let discount = product1.discount;

  let finalPrice = productPrice - (productPrice * discount / 100);

//online order summary
const order={
  orderID:"ord123",
  customer:'mayur',
  item:4,
  totalPrice:3200
}
// const TotalPrice=

// weather report 
const temp={
  city:'mumbai',
  temp:30
}
let celsius=temp.temp;

let fahrenheit=(celsius*9/5)+32;
  return (
    <>
      <h2>Student Info:-</h2>
      <h3>name :{student.name}  Age:-{student.age}</h3>
      <hr />

      <h2>Product Info </h2>
      <ul>
        <li>product Name:- {product.productName}</li>
        <li>Quantity:- {product.quantity}</li>
        <li>Price:- {product.price}</li>
        <li>Total Cast:-{TotalCost}</li>
      </ul>

      <hr />

      <h2>Checks Student Present or not </h2>
      <h3>  Student name:-{student1.name}</h3>
      {
        isPresent ? <p>Student is Present</p> : <p>Student is absent</p>
      }
      <hr />
      <h2>Full name formatting</h2>
      <ul>
        <li>firstname:-{Names.firstName}</li>
        <li>lastName:-{Names.lastName}</li>
        <li>fullName:-{fullName}</li>
      </ul>

      <hr />
      <h2>loan EMI display</h2>
      <ul>
        <li>loanAmount:-{loanDetails.loanAmount}</li>
        <li>interestRate:-{loanDetails.interestRate}</li>
        <li>tenureYears:-{loanDetails.tenureYears}</li>
        <li>EMI:-{EMI}</li>
      </ul>

      <hr />
      <h2>employee salary breakdown</h2>
      <ul>
        <li>Emp name:- {employee.name}</li>
        <li>basic:-{employee.basic}</li>
        <li>hra:-{employee.hra}</li>
        <li>Total salary :- {totalSalary}</li>
      </ul>

      <hr />
      <h2>product discounted price</h2>
      <ul>
        <li>Original Price:-{product1.price}</li>
        <li>Discount per:-{product1.discount}</li>
        <li>Final Price:-{finalPrice}</li>
      </ul>
      <hr />

<h2>Online Order Summary</h2>

<h2>weather Report </h2>
<ul>
  <li>city:{temp.city}</li>
  <li>temp_in_celcius:-{temp.temp}</li>
  <li>temp_in_fahrenheit:-{fahrenheit}</li>
</ul>
    </>
  )
}

export default App
