# Lab6

## Maven

Maven is a powerful build automation tool used primarily for Java projects. Developed by the Apache Software Foundation, it simplifies the build process like compiling code, packaging binary code, and running tests. Maven uses a Project Object Model (POM) in XML to describe the software project being built, its dependencies on other external modules and components, the build order, directories, and required plugins.

## Selenium

Selenium is a popular tool for automating web browsers. It lets you control a web browser programmatically to mimic user actions like clicking buttons, entering text, and navigating through pages. This is really useful for testing web applications to make sure they work as expected across different browsers and systems. Selenium can also be used for web scraping, which means collecting data from websites automatically.

Here's why people use Selenium:

1. **Cross-Browser Testing**: It works on multiple browsers, like Chrome, Firefox, and Edge, allowing you to test your website's compatibility with them.

2. **Language Support**: You can write your Selenium scripts in various programming languages, including Java, Python, C#, and JavaScript, making it flexible to integrate with different tech stacks.

3. **Automate Repetitive Tasks**: Beyond testing, it can automate any repetitive tasks that you can do in a web browser, saving time and effort.

4. **Community and Resources**: Selenium has a large and active community, which means lots of tutorials, guides, and help are available.

In short, Selenium is like a robot that can use ia web browser just like a human but faster and without getting tired, making it great for testing websites or automating web tasks.

## Setup

**IDE**: IntelliJ 

**Dependencies**:

 - Selenium
```xml
<dependencies>
        <dependency>
            <groupId>org.seleniumhq.selenium</groupId>
            <artifactId>selenium-java</artifactId>
            <version>4.1.2</version>
        </dependency>
</dependency>
```
- Web Driver Manager
```xml
<dependencies>
        
        <dependency>
            <groupId>io.github.bonigarcia</groupId>
            <artifactId>webdrivermanager</artifactId>
            <version>5.1.0</version>
        </dependency>
</dependencies>
```
- slf4j: For logging
```xml
<dependencies>
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-simple</artifactId>
            <version>1.7.30</version> <!-- Use the latest version -->
        </dependency>
</dependencies>
```

**When you have all the dependencies added to ```pom.xml```, you'll see a button somewhere on the right of the code, 
click it and the dependencies will be added to your project.**

- **Chrome Browser Version**: Download V.114 and below.

  https://google-chrome.en.uptodown.com/mac/versions

- Install Chrome driver.

## How to use

**import**
```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeOptions;
```

**setup**
```java
WebDriverManager.chromedriver().setup();
ChromeOptions options = new ChromeOptions();
options.addArguments("--headless");
options.addArguments("--remote-allow-origins=*");
WebDriver driver = new ChromeDriver(options);
```

**basic use**
```java
// navigates to a given URL
driver.get("target URL");

// Finding Elements
// By.id(), By.className(), and By.tagName()
WebElement element = driver.findElement(By.className("some-class"));

// Retrieve multiple elements
List<WebElement> elements = driver.findElements(By.tagName("tr"));

// Extract information
String text = element.getText();

// Closing the Browser
driver.quit();
```

**good practice**
```java
try {
    // main logic
} catch { 
    // error handling
} finally { driver.quit; }
```

## Hints

**Check the source code and analyze it first**
