import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router";
import { FrontLayout } from "./layouts/front/FrontLayout.tsx"
import Home from "./pages/home/Home.tsx"
import { PostCreate } from "./pages/posts/PostCreate.tsx"

createRoot(document.getElementById("root")!)
    .render(
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route element={<FrontLayout/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/posts/create" element={<PostCreate />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>,
    )
