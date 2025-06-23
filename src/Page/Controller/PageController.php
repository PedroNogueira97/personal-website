<?php

namespace App\Page\Controller;

use App\Timeline\Entity\Timeline;
use App\Page\Entity\Page;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

final class PageController extends AbstractController
{
    
    public function home(EntityManagerInterface $entityManager): Response
    {
        $page = $entityManager->getRepository(Page::class)->findOneBy(['isHome' => true]);

        $timelineList = $entityManager->getRepository(Timeline::class)->findAll();

        if (!$page){
            throw $this->createNotFoundException("Página inicial não encontrada");
        }

        return $this->render('page/home.html.twig', [
            'page' => $page,
            'timelineList' => $timelineList,
        ]);
    }

    public function show(EntityManagerInterface $entityManager, string $slug): Response
    {

        $page = $entityManager->getRepository(Page::class)->findOneBy(['slug' => $slug]);

        if (!$page) {
            throw $this->createNotFoundException("Página não encontrada");
        }

        return $this->render('page/index.html.twig', [
            'page' => $page,
        ]);

    }


}
