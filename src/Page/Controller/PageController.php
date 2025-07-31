<?php

namespace App\Page\Controller;

use App\Timeline\Entity\Timeline;
use App\Skill\Repository\SkillRepository;
use App\Page\Entity\Page;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

final class PageController extends AbstractController
{
    
    public function home(EntityManagerInterface $entityManager, SkillRepository $skillRepository): Response
    {
        $page = $entityManager->getRepository(Page::class)->findOneBy(['isHome' => true]);

        $timelineList = $entityManager->getRepository(Timeline::class)->findAll();

        $skillsByCategory = $skillRepository->findSkillsGroupedByCategory();

        if (!$page){
            throw $this->createNotFoundException("Página inicial não encontrada");
        }

        return $this->render('page/home.html.twig', [
            'page' => $page,
            'timelineList' => $timelineList,
            'backend' => $skillsByCategory['backend'],
            'devops' => $skillsByCategory['devops'],
            'frontend' => $skillsByCategory['frontend'],
            'marketing' => $skillsByCategory['marketing'],

        ]);
    }

    public function show(EntityManagerInterface $entityManager, string $slug): Response
    {

        $page = $entityManager->getRepository(Page::class)->findOneBy(['slug' => $slug]);

        if (!$page) {
            throw $this->createNotFoundException("Página não encontrada");
        }

        #This way is not recommended, but is temporary since I will create a admin panel to create pages
        if ($page->getSlug() === 'about'){

            return $this->render('page/about.html.twig', [
                'page' => $page,
            ]);

        } else if ($page->getSlug() === 'projects'){

            return $this->render('page/projects.html.twig', [
                'page' => $page,
            ]);

        } else {
           return $this->render('page/index.html.twig', [
            'page' => $page,
        ]); 

        }

    }


}
