const elemProjects = document.getElementById('project__content')

const creatImage = (image) => {
  const elemPicture = document.createElement('picture')
  const elemImg = document.createElement('img')

  elemImg.setAttribute('src', image)

  elemPicture.appendChild(elemImg)

  return elemPicture
}

const creatStrong = (projectName) => {
  const elemStrong = document.createElement(strong)
  elemStrong.innerText = projectName 

  return elemStrong
}

const createTags = (projectTags) => {
  const elemTags = document.createElement('div')

  projectTags.forEach(tag =>{
      const elemTag = document.createElement('span')
      elemTag.innerText = tag

      elemTags.appendChild(elemTag)
    })
  return elemTags
}

const creatPoject = (project) => {
    const elemProject = document.createElement('a')


    elemProject.setAttribute('href', project.link)
    elemProject.setAttribute('target', '_blank')
    
    elemProject.classList.add('projact')

    elemProject.appendChild(creatImage(project.image))
    
    const elemStrong = document.createElement('strong')
    elemStrong.innerText = project.name



    elemProject.appendChild(creatStrong(project.name))
    

    elemProject.appendChild(createTags(project.tags))

    return  elemProject
}

const Loadprojects = (projects) => {
  projects.forEach(projects => {
    elemProjects.appendChild(creatPoject(projects))
  });
}

fetch ('./projects.json').then(response => response.json()).then(Loadprojects)
