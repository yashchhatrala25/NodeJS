# Synchronous Programming vs Asynchronous Programming

# Synchronous Programming
- Perform only 1 task at a time

Example:
In Synchronous operations tasks are performed one at a time.
Users... ---------->  Products... ----------> Cities... 
(5sec)                (2sec)                  (4sec)
Total Time (11sec)

# Asynchronous Programming
- Second Task start before ending 1st task
In Asynchronous, Second Task do not wait to finish First Task

Example:
Users... (5sec)
    roducts... (2sec)
        Cities... (4sec)
Total Time (5sec)