<?php

namespace App\Skill\Repository;

use App\Skill\Entity\Skill;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Skill>
 */
class SkillRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Skill::class);
    }

    //    /**
    //     * @return Skill[] Returns an array of Skill objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('s')
    //            ->andWhere('s.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('s.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Skill
    //    {
    //        return $this->createQueryBuilder('s')
    //            ->andWhere('s.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function findSkillsGroupedByCategory(): array
{
    $qb = $this->createQueryBuilder('s')
        ->where('s.category IN (:categories)')
        ->setParameter('categories', ['backend', 'frontend', 'devops'])
        ->orderBy('s.category', 'ASC')
        ->addOrderBy('s.level', 'DESC'); // ordena por nível, opcional

    $skills = $qb->getQuery()->getResult();

    $grouped = [
        'backend' => [],
        'frontend' => [],
        'devops' => [],
    ];

    foreach ($skills as $skill) {
        $category = $skill->getCategory();
        if (isset($grouped[$category])) {
            $grouped[$category][] = $skill;
        }
    }

    return $grouped;
}
}
