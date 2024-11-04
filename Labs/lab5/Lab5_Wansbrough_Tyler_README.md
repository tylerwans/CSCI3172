# Lab 5

* *Date Created*: 18 10 2024
* *Last Modification Date*: 20 10 2024
* *Lab URL*: <https://web.cs.dal.ca/~wansbrough/csci3172/lab5/>
* *Git URL*: <https://git.cs.dal.ca/wansbrough/csci3172.git>


## Authors


* [Tyler](ty868750@dal.ca) - (Author)


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds



## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.





### script.js

*Lines 11-16 *

```
Copy and paste your code on lines mentioned 
function checkPrime(num) {
        if (num <= 1) return false; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; 
        }
        return true;
    }


```

The code above was created by adapting the code in [Stackoverflow](https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript) as shown below: 

```
Copy and paste the snippet of code you are referencing
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

```

- <!---How---> The code in [Stackoverflow](https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript) was implemented by changing the results of for loop
- <!---Why---> [Stackoverflow](https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript) Code was used because i forgot how to check prime
- <!---How---> [Stackoverflow](https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript)'s Code was modified by Tyler Wansbrough

*Repeat as needed*



## Artificial Intelligence Tools Used
If in completing your lab / assignment / project you used any Artificial Intelligence Tools or Plugins, then provide a list of the tools or plugins used, the prompt used, the code generated by the AI, where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

* [Name of Tool](http://www.dropwizard.io/1.0.2/docs/) - The AI Tool used
* [Name of Tool](http://www.dropwizard.io/1.0.2/docs/) - The AI Plugin used
* [Name of Tool](http://www.dropwizard.io/1.0.2/docs/) - The AI Tool used


### Prompt Used on *NAME OF AI TOOL*

```
Copy and paste the prompt used 

```

The code prompt above was used [NAME](link) to generate the code shown below: 

```
Copy and paste the entirety of the code generated by the AI Tool listed above.

```

#### File Name
*Lines ## - ##*

```
Copy and paste your code on the lines mentioned

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...


### Prompt Used on *NAME OF AI TOOL*

```
Copy and paste the prompt used 

```

The code prompt above was used [NAME](link) to generate the code shown below: 

```
Copy and paste the entirety of the code generated by the AI Tool listed above.

```

#### File Name
*Lines ## - ##*

```
Copy and paste your code on the lines mentioned

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...


*Repeat as needed*



## Acknowledgments



