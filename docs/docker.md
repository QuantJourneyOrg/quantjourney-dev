<div>
  <div style="text-align: left; margin-top: 10px; margin-bottom: 0px; padding-bottom: -10px;">
    <h1 class="start-heading" style="font-size: 36px; margin-bottom: 5px;">Docker Installation Guide</h1>
  </div>
</div>

This guide will walk you through the process of installing Docker on your system. Docker is a platform for developing, shipping, and running applications in containers.

## **Prerequisites**

- A 64-bit operating system
- For Windows: Windows 10 64-bit: Pro, Enterprise, or Education (Build 16299 or later)
- For Mac: macOS 10.14 or newer
- For Linux: A 64-bit version of Ubuntu, Debian, Fedora, or CentOS

## **Installation Steps**

### For Windows:

1. Download Docker Desktop for Windows from the official Docker website: https://www.docker.com/products/docker-desktop

2. Double-click the installer to run it.

3. Follow the installation wizard instructions.

4. Once installed, start Docker Desktop from the Windows Start menu.

5. You may need to enable virtualization in your BIOS settings if it's not already enabled.

### For macOS:

1. Download Docker Desktop for Mac from the official Docker website: https://www.docker.com/products/docker-desktop

2. Double-click the `.dmg` file to open the installer.

3. Drag the Docker icon to the Applications folder.

4. Open Docker from the Applications folder.

5. You may be prompted to authorize Docker with your system password.

### For Ubuntu:

1. Update your package index:
   ```
   sudo apt-get update
   ```

2. Install packages to allow apt to use a repository over HTTPS:
   ```
   sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
   ```

3. Add Docker's official GPG key:
   ```
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   ```

4. Set up the stable repository:
   ```
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   ```

5. Update the package index again:
   ```
   sudo apt-get update
   ```

6. Install Docker CE:
   ```
   sudo apt-get install docker-ce
   ```

## **Verifying the Installation**

To verify that Docker is installed correctly, run the following command in your terminal or command prompt:

```
docker --version
```

This should display the installed version of Docker.

## **Running Your First Container**

To test your Docker installation, you can run a simple "Hello World" container:

```
docker run hello-world
```

If everything is set up correctly, you should see a welcome message and some additional information about Docker.

## **Next Steps**

- Learn basic Docker commands: `docker ps`, `docker images`, `docker pull`, `docker run`
- Explore Docker Hub for pre-built images: https://hub.docker.com/
- Start containerizing your own applications

Remember to consult the official Docker documentation for more detailed information and advanced usage: https://docs.docker.com/

<div style="padding: 50px">
</div>