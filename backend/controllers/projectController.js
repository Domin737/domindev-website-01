import Project from "../models/Project.js";
import { formatDate } from "../utils/helpers.js";

export const createProject = async (req, res) => {
  try {
    const { name, description, startDate, endDate } = req.body;
    const project = new Project({
      name,
      description,
      startDate,
      endDate,
    });
    await project.save();
    res.status(201).json({ message: "Projekt utworzony pomyślnie", project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    const formattedProjects = projects.map((project) => ({
      ...project._doc,
      startDate: formatDate(project.startDate),
      endDate: formatDate(project.endDate),
    }));
    res.json(formattedProjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Projekt nie znaleziony" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { name, description, startDate, endDate } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { name, description, startDate, endDate },
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ message: "Projekt nie znaleziony" });
    }
    res.json({
      message: "Projekt zaktualizowany pomyślnie",
      project: updatedProject,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Projekt nie znaleziony" });
    }
    res.json({ message: "Projekt usunięty pomyślnie" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
