# What is FinOps?
[FinOps](https://www.finops.org/introduction/what-is-finops/) stands for Finance Operations and is a framework that provides best practices to optimize cloud spend. FinOps breaks down the silos between procurement and engineering teams to allow companies to improve the speed, cost and quality of their cloud architecture. FinOps is a mindset and should be driven by a centralized team. This team takes accountability of cloud spend, provides showback reports, and works together with the finance & engineering teams to manage and optimize total spend.  

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

!!! quote "*If it seems that FinOps is about saving money, then think again. FinOps is about making money.*"
