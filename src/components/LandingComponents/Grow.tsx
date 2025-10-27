type ItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Item = ({ title, description,icon }: ItemProps) => (
  <div>
    <div>
        {icon}
    </div>
    <div>
    <h3>{title}</h3>
    <p>{description}</p>
    </div>
  </div>
);  


const Grow = () => {
  return (
    <section>
        <div>
            <div>
                <div>
                <h2>Grow Your Business With BookIt</h2>
                <p>
                    Join thousands of service providers who trust
                     BookIt to grow their business and streamline their operations.
                </p>
                </div>
                <div>
                    <Item 
                        title="Grow your Business"
                        description="Reach Thousands of Potential Customers"
                        icon={<></>}/>
                    <Item
                        title="Manage Bookings"
                        description="Professional booking management tools"
                        icon={<></>}
                    />
                    <Item
                         title="Get Paid Faster"
                         description="direct payments with automatic Payouts"
                         icon={<></>}
                    />
                    <Item
                        title="Stay Connected"
                        description="Real time notifications and updates"
                        icon={<></>}
                    />  
                </div>
                <div>
                    <button>Start your business journey</button>
                </div>
            </div>
            <div>
                {/* <img src="" alt=""/> */}
            </div>
        </div>
    </section>
  )
}

export default Grow