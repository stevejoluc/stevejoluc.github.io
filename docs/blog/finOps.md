# What is FinOps?

## Summary
[FinOps](https://www.finops.org/introduction/what-is-finops/) is a framework that provides best practices to optimize cloud spend. FinOps breaks down the silos between procurement and engineering teams to allow companies to improve the speed, cost and quality of their cloud architecture. FinOps is a mindset and should be driven by a centralized team. This team takes accountability of cloud spend, provides showback reports, and works together with finance & engineering teams to manage and optimize total spend.  

#### FinOps Lifecycle
FinOps is a continuous process and has an operating model that spans three phases; *Inform*, *Optimize*, and *Operate*.

![FinOps cycle](/assets/images/finops_cycle.png)

#### Inform
- Understand the bills
    * Who and what are driving these?
- Provide visibility through showback reports

#### Optimize
- Goals and strategies
- Cost avoidance
    * What optimizations can be made?
        * Terminating EC2 instances
        * Deleting unattached volumes
        * Implementing lifecycle policies
- Cost savings
    * Can we reduce instance cost through purchasing reserved instances?
- Cost Optimizations
    * Set goals for annual spending
    * Develop OKRs

#### Operate
- Plan and execute tasks generate from the Inform and Optimize phase
    * Implement automation
        * Turn off non-critical instances outside of business hours
        * Delete older snapshots

## Origins of FinOps
FinOps developed as companies started shifting from traditional pricing and infrastructure management to a more cost effective, scalable platform that we refer to the *public cloud.* This begs the question, why did this shift occur and what led the public cloud to have an estimated total spend of $360B in 2022?

Let's start off by talking about the traditional infrastructure approach, where companies purchase servers and own data centers. Most hardware and software purchases were typically handled by a procurement team and approved by leadership. This allowed companies to operate on a *fixed cost*. Meaning, DevOps teams could only use the servers that were allocated to them. Operating under this model makes it difficult to surpass budgets. However, traditional infrastructure is simply not effective compared to the benefits of the public cloud.

The public cloud provides organization benefits and cost saving opportunities that traditional infrastructure lacks. However, these benefits also introduce a new type of cost, *variable cost*. With the public cloud, engineers are given the freedom to architect their solutions in a variety of ways. They have a suite of services they can utilize. They even have the ability to pick the number of servers, the specs, volume size, and much more! With the public cloud, spend can go from $0-$100k in a few days. Even by a single line of code.

!!! quote "*Every line of code is a purchase decisions.*"

While the benefits of cloud are great, it's important to create a culture that takes accountability of their cloud usage and spend. Without cost accountability, it's easy to drive up cost in resources that are oversized or that you may not be using.

FinOps was created to help tackle the top challenges organizations face when utilizing the cloud. These include; getting engineers to take action on cost optimization, create accurate forecasting, enabling automation to reduce waste or unused resource, and much more!

## Benefits of FinOps
Remember when I said that public cloud is estimated to have a total spend of $360B? That is an 80% increase from 2018. Of this $360B, **30% of it is waste**. 

FinOps is not about sacrificing the quality or value of a solution to go with the cheapest option. The goal is to *get as much value as possible out of your spending.*

#### Cost Avoidance + Cost Savings = Cost Optimization

Creating a centralized FinOps team will:

- Create accurate cost analysis
- Provide real-time decision making
- Improve resource planning
- Eliminate waste spend
- Enable accurate forecasting
- Much more!

No matter where you are in your journey to the cloud, it's crucial to adopt FinOps principles. Getting your organization to adopt these principles will help your organization the maximum business value by helping technology, finance, and business teams to collaborate on data-driven decisions. For more information, I highly suggest checking out the [FinOps Foundation](https://www.finops.org/introduction/what-is-finops/).