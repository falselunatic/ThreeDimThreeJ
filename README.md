# Three.js 3D Scene with Rotating Box, Two Rotating Spheres, and Grid
(I'm just learning & exploring)

This project is a basic 3D scene built with [Three.js](https://threejs.org/), featuring a rotating box, a plane, a sphere, a grid helper, and interactive camera controls using `OrbitControls`. The scene includes visual aids such as an axes helper and grid to enhance orientation within the 3D environment.

## Features
- **3D Rotating Box**: A green cube that rotates continuously along the X and Y axes.
- **3D Sphere**: A blue sphere positioned above the plane.
- **Plane**: A white plane that serves as the ground, aligned along the XZ plane.
- **Grid Helper**: A grid that overlays the plane for better spatial orientation.
- **Axes Helper**: Shows the X (red), Y (green), and Z (blue) axes to provide a reference point in the scene.
- **Orbit Controls**: Enables interactive camera control with mouse (rotation, zoom, and pan).

## Demo
Here’s what the 3D scene looks like:
[(1)](https://github.com/user-attachments/assets/e5fcf061-22c1-4218-8695-a472e0832224)
[(2)](https://github.com/user-attachments/assets/8857d227-02af-41c9-9594-e422b8c22ae7)
[Final Demo(3)](https://github.com/user-attachments/assets/159ad4dd-05ff-43eb-a07c-8a6a9df2d9f1)
*3D scene with the rotating box, sphere, and grid.*

## Installation and Usage

### Prerequisites
- [Node.js](https://nodejs.org/)
- A local development server like [Parcel](https://parceljs.org/) or [webpack](https://webpack.js.org/)

### Setup
1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the local development server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:1234` (or the default port for your development server).

## Controls
- **Mouse**: Rotate, zoom, and pan the camera using the mouse.
- **Keyboard**: Use the `W`, `A`, `S`, and `D` keys for navigation.

## Code Overview
- `WebGLRenderer`: Sets up the rendering context and attaches it to the HTML document.
- `PerspectiveCamera`: A 3D perspective camera for viewing the scene.
- `OrbitControls`: Enables user interaction with the camera.
- `BoxGeometry`, `PlaneGeometry`, and `SphereGeometry`: The 3D objects in the scene, including a rotating box, a static sphere, and a plane.
- `AxesHelper` and `GridHelper`: Visual aids for orientation and structure in the 3D scene.
  
## Screenshots

![Screenshot (176)](https://github.com/user-attachments/assets/dd5a04cf-2fc3-4f1e-863e-d8d3eea429b2)
![Screenshot (180)](https://github.com/user-attachments/assets/419eb883-0f10-4a4f-a2f4-ee29a565b723)
![Screenshot (183)](https://github.com/user-attachments/assets/08580871-7b85-4147-9616-f5ee49255a7a)
![Screenshot (189)](https://github.com/user-attachments/assets/11ef02e7-7c36-46da-af74-5f9587bd4957)
![Screenshot (190)](https://github.com/user-attachments/assets/3acb12fe-1b19-4590-9736-84b3f861f6f7)
![Screenshot (194)](https://github.com/user-attachments/assets/78eedf8b-7962-4647-b18e-9ff32fae9cca)
![Screenshot (195)](https://github.com/user-attachments/assets/24623793-2a47-4ec4-9ff8-bbada848bc57)
![Screenshot (196)](https://github.com/user-attachments/assets/7f157547-1924-46c4-b2b5-7ccd41387810)
![Screenshot (202)](https://github.com/user-attachments/assets/e3f01435-d131-4af2-bd53-720ade1544b7)
![Screenshot (203)](https://github.com/user-attachments/assets/80fbfc50-6b9b-4d62-b7cc-8c56934adb70)
![Screenshot (206)](https://github.com/user-attachments/assets/0354c8b7-f721-4465-80f0-48802be810ac)
![Screenshot (208)](https://github.com/user-attachments/assets/f10791e3-6b6d-4145-94d9-d8508a2c597c)
![Screenshot (209)](https://github.com/user-attachments/assets/532ea097-0962-4a6b-80b7-6ee4e753091e)
![Screenshot (210)](https://github.com/user-attachments/assets/63f4fbbf-f3dc-4eef-b2cf-92f75e0afafb)
![Screenshot (211)](https://github.com/user-attachments/assets/bcc45901-0721-4a8f-beb1-fa847c2a691b)
![Screenshot (223)](https://github.com/user-attachments/assets/30e3a724-575c-47c7-a28a-6511ada89601)
![Screenshot (225)](https://github.com/user-attachments/assets/fdc5c997-12b7-45f5-a444-2e6309e57b7b)
![Screenshot (227)](https://github.com/user-attachments/assets/d0090ccd-7dba-440e-982c-3b78e2eb1abe)
![Screenshot (228)](https://github.com/user-attachments/assets/7b962191-7212-483c-8a78-7d675f7e5cd7)
![Screenshot (229)](https://github.com/user-attachments/assets/dd88c430-7cf5-4c65-9b37-f2ae74f83fe8)
![Screenshot (230)](https://github.com/user-attachments/assets/0b2b968b-5a9c-4f3f-8130-ae8dd6f5fc9d)
![Screenshot (232)](https://github.com/user-attachments/assets/22d411b1-3051-40a9-bedf-a4fae1974bf5)
![Screenshot (234)](https://github.com/user-attachments/assets/a4b668b4-a2ea-48a0-bcac-a0debdf38a3b)
![Screenshot (235)](https://github.com/user-attachments/assets/03859fe2-730a-4c0f-9d28-63db8921c330)
![Screenshot (236)](https://github.com/user-attachments/assets/bfca219e-ad21-45de-aedc-bfab8654f43b)
![Screenshot (238)](https://github.com/user-attachments/assets/f0566950-1b7b-4451-a605-8a2ca70ff073)
![Screenshot (239)](https://github.com/user-attachments/assets/eeda4ccd-8e40-44fa-9a23-14c92c62cc7c)
![Screenshot (251)](https://github.com/user-attachments/assets/a89c5214-59e1-4bae-ab4c-1b7a73c9e44e)
![Screenshot (255)](https://github.com/user-attachments/assets/c16d9f98-bada-4cfb-a669-453f1f27bb8d)
![Screenshot (249)](https://github.com/user-attachments/assets/8b1fd4ad-cf05-49cb-85b3-4afd4bce4afe)
![Screenshot (257)](https://github.com/user-attachments/assets/413e9b90-a91b-4c41-b7d9-424fa1d59416)
![Screenshot (256)](https://github.com/user-attachments/assets/e5310475-f483-465a-9193-2127bed01ba0)
![Screenshot (262)](https://github.com/user-attachments/assets/c5255c48-29e1-479a-8cb8-aa1337baf1c0)
*Close-up view of the box, plane, and sphere.*

## Future Enhancements

- Adding more 3D objects such as pyramids or toruses.
- Implementing dynamic lighting for improved realism.
- Adding textures to the objects for better visual detail.
