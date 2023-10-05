//icons
import { IoAnalyticsSharp } from "react-icons/io5";
import { AiOutlineBarChart, AiOutlineLineChart } from "react-icons/ai";

const Middle = ({ orders }) => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="date">
        <h1>{date}</h1>
      </div>

      <div className="insights">
        <div className="sales">
          <IoAnalyticsSharp />
          <div className="middle">
            <div className="left">
              <h3>Total Sales</h3>
              <h1>$25,024</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>

        <div className="expenses">
          <AiOutlineBarChart />
          <div className="middle">
            <div className="left">
              <h3>Total Expenses</h3>
              <h1>$14,160</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>62%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>

        <div className="income">
          <AiOutlineLineChart />
          <div className="middle">
            <div className="left">
              <h3>Total Income</h3>
              <h1>$10,806</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>44%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
      </div>

      <div class="recent-orders">
        <h2>Recent-order</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Number</th>
              <th>Payment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.productName}</td>
                <td>{order.productNumber}</td>
                <td>{order.paymentStatus}</td>
                <td
                  className={
                    order.shipping === "Decline"
                      ? "danger"
                      : order.shipping === "pending"
                      ? "warning"
                      : "primary"
                  }
                >
                  {order.shipping}
                </td>
                <td class="primary">Details</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="#">Show All</a>
      </div>
    </main>
  );
};

export default Middle;
